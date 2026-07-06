export const runtime = "edge";

import { fetchAirportsRecord } from "@/app/airportsDataHelper";

export async function GET(
  request: Request,
  { params }: { params: { endpoint: string; id: string } }
) {
  return fetchAirportsRecord(request, params.endpoint, params.id);
}
