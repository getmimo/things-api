export async function fetchData(
  request: Request,
  path: string,
  id: string
): Promise<Response> {
  const url = new URL(
    `/data/${path}/${id.endsWith(".json") ? id : `${id}.json`}`,
    request.url
  );

  const response = await fetch(url.toString());
  if (response.ok) {
    const content = await response.text();
    return new Response(content, {
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response("Not found", { status: 404 });
  }
}
