export const runtime = "edge";

import { fetchData } from "@/app/dataHelper";

export async function GET(request: Request) {
  return fetchData(request, "swapi/species", "all");
}
