const DATASET_ENDPOINTS = [
  "airports",
  "airport-frequencies",
  "airport-comments",
  "runways",
  "navaids",
  "countries",
  "regions",
] as const;

type DatasetEndpoint = (typeof DATASET_ENDPOINTS)[number];
type AirportRecord = Record<string, unknown>;
type DatasetChunk = { file: string; count: number };
type DatasetIndex = {
  count: number;
  chunks: DatasetChunk[];
  lookup: Record<string, Record<string, string>>;
};
type AirportLocationRecord = {
  id: unknown;
  latitude_deg: unknown;
  longitude_deg: unknown;
};

const DEFAULT_LIMIT = 100;
const MAX_LIMIT = 1000;

const LOOKUP_FIELDS: Record<DatasetEndpoint, string[]> = {
  airports: ["id", "ident", "icao_code", "iata_code", "gps_code", "local_code"],
  "airport-frequencies": ["id"],
  "airport-comments": ["id"],
  runways: ["id"],
  navaids: ["id", "ident", "filename"],
  countries: ["id", "code"],
  regions: ["id", "code"],
};

function isDatasetEndpoint(endpoint: string): endpoint is DatasetEndpoint {
  return DATASET_ENDPOINTS.includes(endpoint as DatasetEndpoint);
}

function jsonResponse(body: unknown, init?: ResponseInit) {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });
}

async function loadIndex(request: Request, endpoint: string) {
  if (!isDatasetEndpoint(endpoint)) {
    return null;
  }

  const url = new URL(`/data/airports/${endpoint}/index.json`, request.url);
  const response = await fetch(url.toString());

  if (!response.ok) {
    return null;
  }

  return (await response.json()) as DatasetIndex;
}

async function loadChunk(
  request: Request,
  endpoint: DatasetEndpoint,
  file: string
) {
  const url = new URL(`/data/airports/${endpoint}/${file}`, request.url);
  const response = await fetch(url.toString());

  if (!response.ok) {
    return [];
  }

  return (await response.json()) as AirportRecord[];
}

function parseNonNegativeInteger(value: string | null) {
  if (!value || !/^\d+$/.test(value)) {
    return null;
  }

  const parsed = Number(value);
  return Number.isSafeInteger(parsed) ? parsed : null;
}

function getPagination(request: Request) {
  const url = new URL(request.url);
  const offset = parseNonNegativeInteger(url.searchParams.get("offset")) ?? 0;
  const requestedLimit = parseNonNegativeInteger(url.searchParams.get("limit"));
  const limit = Math.min(requestedLimit ?? DEFAULT_LIMIT, MAX_LIMIT);

  return { offset, limit };
}

export async function fetchAirportsRoot(request: Request) {
  const url = new URL("/data/airports/root.json", request.url);
  const response = await fetch(url.toString());

  if (!response.ok) {
    return jsonResponse({ error: "Airports data not found." }, { status: 404 });
  }

  return new Response(await response.text(), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function fetchAirportsCollection(
  request: Request,
  endpoint: string
) {
  if (!isDatasetEndpoint(endpoint)) {
    return fetchAirportsRecord(request, "airports", endpoint);
  }

  const index = await loadIndex(request, endpoint);

  if (!index) {
    return jsonResponse({ error: "Dataset not found." }, { status: 404 });
  }

  const { offset, limit } = getPagination(request);
  const result: AirportRecord[] = [];
  let currentOffset = 0;

  for (const chunk of index.chunks) {
    const chunkStart = currentOffset;
    const chunkEnd = chunkStart + chunk.count;
    currentOffset = chunkEnd;

    if (chunkEnd <= offset) {
      continue;
    }

    if (result.length >= limit) {
      break;
    }

    const records = await loadChunk(request, endpoint, chunk.file);
    const sliceStart = Math.max(offset - chunkStart, 0);
    const sliceEnd = sliceStart + (limit - result.length);

    result.push(...records.slice(sliceStart, sliceEnd));
  }

  return jsonResponse({
    count: index.count,
    offset,
    limit,
    results: result,
  });
}

export async function fetchAirportLocations(request: Request) {
  const index = await loadIndex(request, "airports");

  if (!index) {
    return jsonResponse({ error: "Dataset not found." }, { status: 404 });
  }

  const airports: AirportLocationRecord[] = [];

  for (const chunk of index.chunks) {
    const records = await loadChunk(request, "airports", chunk.file);

    for (const record of records) {
      airports.push({
        id: record.id,
        latitude_deg: record.latitude_deg,
        longitude_deg: record.longitude_deg,
      });
    }
  }

  return jsonResponse(airports);
}

export async function fetchAirportLocationsPreview(request: Request) {
  const index = await loadIndex(request, "airports");

  if (!index || index.chunks.length === 0) {
    return jsonResponse({ error: "Dataset not found." }, { status: 404 });
  }

  const records = await loadChunk(request, "airports", index.chunks[0].file);

  return jsonResponse([
    ...records.slice(0, 25).map((record) => ({
      id: record.id,
      latitude_deg: record.latitude_deg,
      longitude_deg: record.longitude_deg,
    })),
  ]);
}

export async function fetchRandomAirport(request: Request) {
  const index = await loadIndex(request, "airports");

  if (!index || index.count === 0) {
    return jsonResponse({ error: "Airports data not found." }, { status: 404 });
  }

  let recordOffset = Math.floor(Math.random() * index.count);

  for (const chunk of index.chunks) {
    if (recordOffset >= chunk.count) {
      recordOffset -= chunk.count;
      continue;
    }

    const records = await loadChunk(request, "airports", chunk.file);
    const airport = records[recordOffset];

    if (!airport) {
      return jsonResponse({ error: "Airport not found." }, { status: 404 });
    }

    return jsonResponse(airport, {
      headers: { "Cache-Control": "no-store" },
    });
  }

  return jsonResponse({ error: "Airport not found." }, { status: 404 });
}

export async function fetchAirportsRecord(
  request: Request,
  endpoint: string,
  id: string
) {
  const index = await loadIndex(request, endpoint);

  if (!index || !isDatasetEndpoint(endpoint)) {
    return jsonResponse({ error: "Dataset not found." }, { status: 404 });
  }

  const decodedId = decodeURIComponent(id);
  const lookupFields = LOOKUP_FIELDS[endpoint];
  const chunkFile = lookupFields
    .map((field) => index.lookup[field]?.[decodedId])
    .find(Boolean);

  if (!chunkFile) {
    return jsonResponse({ error: "Record not found." }, { status: 404 });
  }

  const records = await loadChunk(request, endpoint, chunkFile);
  const record = records.find((item) =>
    lookupFields.some((field) => String(item[field] ?? "") === decodedId)
  );

  if (!record) {
    return jsonResponse({ error: "Record not found." }, { status: 404 });
  }

  return jsonResponse(record);
}
