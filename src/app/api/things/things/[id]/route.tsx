export const runtime = "edge";

import { fetchData } from "@/app/dataHelper";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  return fetchData(request, "things/things", params.id);
}
