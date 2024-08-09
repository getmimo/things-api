export const runtime = "edge";

import { fetchData } from "../../../../dataHelper";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  return fetchData(request, "rickandmorty/location", params.id);
}
