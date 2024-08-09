export const runtime = "edge";

import { fetchData } from "../../../dataHelper";

export async function GET(request: Request) {
  return fetchData(request, "rickandmorty/location", "all");
}
