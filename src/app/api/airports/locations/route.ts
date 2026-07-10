export const runtime = "edge";

import { fetchAirportLocations } from "@/app/airportsDataHelper";

export async function GET(request: Request) {
  return fetchAirportLocations(request);
}
