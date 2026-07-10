export const runtime = "edge";
export const dynamic = "force-dynamic";

import { fetchRandomAirport } from "@/app/airportsDataHelper";

export async function GET(request: Request) {
  return fetchRandomAirport(request);
}
