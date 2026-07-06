export const runtime = "edge";

import { fetchAirportsRoot } from "@/app/airportsDataHelper";

export async function GET(request: Request) {
  return fetchAirportsRoot(request);
}
