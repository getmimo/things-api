import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const SOURCE_PAGE = "https://ourairports.com/data/";
const SOURCE_BASE = "https://davidmegginson.github.io/ourairports-data";
const OUTPUT_ROOT = path.join(process.cwd(), "public", "data", "airports");
const CHUNK_SIZE = 5000;

const datasets = [
  {
    endpoint: "airports",
    file: "airports.csv",
    description: "All airport records.",
  },
  {
    endpoint: "airport-frequencies",
    file: "airport-frequencies.csv",
    description: "Communication frequencies for airports.",
  },
  {
    endpoint: "airport-comments",
    file: "airport-comments.csv",
    description: "Member comments for airports.",
  },
  {
    endpoint: "runways",
    file: "runways.csv",
    description: "Runway records for airports.",
  },
  {
    endpoint: "navaids",
    file: "navaids.csv",
    description: "Worldwide radio navigation aids.",
  },
  {
    endpoint: "countries",
    file: "countries.csv",
    description: "Countries used by airport and navaid records.",
  },
  {
    endpoint: "regions",
    file: "regions.csv",
    description: "Top-level administrative subdivisions.",
  },
];

const lookupFields = {
  airports: ["id", "ident", "icao_code", "iata_code", "gps_code", "local_code"],
  "airport-frequencies": ["id"],
  "airport-comments": ["id"],
  runways: ["id"],
  navaids: ["id", "ident", "filename"],
  countries: ["id", "code"],
  regions: ["id", "code"],
};

function endField(row, field) {
  row.push(field);
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  let fieldStarted = false;
  let quoteClosed = false;

  const finishField = () => {
    endField(row, field);
    field = "";
    fieldStarted = false;
    quoteClosed = false;
  };

  const finishRow = () => {
    if (row.length > 0 && row.some((value) => value !== "")) {
      rows.push(row);
    }
    row = [];
  };

  const csv = text.replace(/^\uFEFF/, "");

  for (let index = 0; index < csv.length; index += 1) {
    const char = csv[index];
    const next = csv[index + 1];

    if (inQuotes) {
      if (char === '"') {
        if (next === '"') {
          field += '"';
          index += 1;
        } else {
          inQuotes = false;
          quoteClosed = true;
        }
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"' && !fieldStarted) {
      inQuotes = true;
      fieldStarted = true;
      continue;
    }

    if (!fieldStarted && char === " " && next === '"') {
      continue;
    }

    if (quoteClosed && (char === " " || char === "\t")) {
      continue;
    }

    if (char === ",") {
      finishField();
      continue;
    }

    if (char === "\n") {
      finishField();
      finishRow();
      continue;
    }

    if (char === "\r") {
      if (next !== "\n") {
        finishField();
        finishRow();
      }
      continue;
    }

    field += char;
    fieldStarted = true;
  }

  if (fieldStarted || field !== "" || row.length > 0) {
    finishField();
    finishRow();
  }

  return rows;
}

function normalizeValue(value) {
  return value === "" ? null : value;
}

function recordsFromCsv(csv) {
  const rows = parseCsv(csv);
  const [headerRow, ...dataRows] = rows;
  const headers = headerRow.map((header) => header.trim());

  return dataRows.map((row) =>
    Object.fromEntries(
      headers.map((header, index) => [header, normalizeValue(row[index] ?? "")])
    )
  );
}

async function downloadText(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.status}`);
  }

  return response.text();
}

async function main() {
  await rm(OUTPUT_ROOT, { recursive: true, force: true });
  await mkdir(OUTPUT_ROOT, { recursive: true });

  const root = {
    name: "Airports API",
    source: SOURCE_PAGE,
    sourceRepository: "https://github.com/davidmegginson/ourairports-data",
    downloadedAt: new Date().toISOString(),
    terms: "Public Domain, no guarantee of accuracy or fitness for use.",
    datasets: datasets.map(({ endpoint, file, description }) => ({
      endpoint,
      file,
      url: `${SOURCE_BASE}/${file}`,
      description,
    })),
  };

  await writeFile(
    path.join(OUTPUT_ROOT, "root.json"),
    `${JSON.stringify(root)}\n`,
    "utf8"
  );

  for (const dataset of datasets) {
    const url = `${SOURCE_BASE}/${dataset.file}`;
    const csv = await downloadText(url);
    const records = recordsFromCsv(csv);
    const outputDirectory = path.join(OUTPUT_ROOT, dataset.endpoint);
    const chunkDirectory = path.join(outputDirectory, "chunks");
    const index = {
      endpoint: dataset.endpoint,
      source: url,
      count: records.length,
      chunkSize: CHUNK_SIZE,
      chunks: [],
      lookup: Object.fromEntries(
        lookupFields[dataset.endpoint].map((field) => [field, {}])
      ),
    };

    await mkdir(chunkDirectory, { recursive: true });

    for (let start = 0; start < records.length; start += CHUNK_SIZE) {
      const chunk = records.slice(start, start + CHUNK_SIZE);
      const chunkNumber = String(index.chunks.length + 1).padStart(4, "0");
      const file = `chunks/${chunkNumber}.json`;

      index.chunks.push({ file, count: chunk.length });

      for (const record of chunk) {
        for (const field of lookupFields[dataset.endpoint]) {
          const value = record[field];

          if (value !== null && value !== undefined && value !== "") {
            index.lookup[field][String(value)] = file;
          }
        }
      }

      await writeFile(
        path.join(outputDirectory, file),
        `${JSON.stringify(chunk)}\n`,
        "utf8"
      );
    }

    await writeFile(
      path.join(outputDirectory, "index.json"),
      `${JSON.stringify(index)}\n`,
      "utf8"
    );

    console.log(
      `${dataset.endpoint}: ${records.length.toLocaleString("en-US")} records`
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
