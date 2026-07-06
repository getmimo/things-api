export const runtime = "edge";

import { fetchAirportsCollection } from "@/app/airportsDataHelper";

export async function GET(
  request: Request,
  { params }: { params: { endpoint: string } }
) {
  return fetchAirportsCollection(request, params.endpoint);
}
