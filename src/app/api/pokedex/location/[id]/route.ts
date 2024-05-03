export const runtime = "edge";

import { handleRequest } from "@/app/pokedexHelper";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  if (!id) {
    return new Response("ID not provided", { status: 400 });
  }

  return handleRequest(request, "location", id);
}
