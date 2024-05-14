import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { hostname, pathname } = request.nextUrl;

  const rewriteMap: { [key: string]: string } = {
    "swapi.mimo.dev": "/swapi",
    "pokedex.mimo.dev": "/pokedex",
  };

  const apiPrefix = "/api";
  const dataPrefix = "/data";

  if (rewriteMap[hostname]) {
    const basePath = rewriteMap[hostname];
    const url = request.nextUrl.clone();

    if (pathname.startsWith(apiPrefix)) {
      // Rewrite the API path to include the base path
      url.pathname = `${apiPrefix}${basePath}${pathname.slice(
        apiPrefix.length
      )}`;

      // Allow everything to disable CORS
      const response = NextResponse.rewrite(url);
      response.headers.set("Access-Control-Allow-Origin", "*");
      response.headers.set("Access-Control-Allow-Methods", "*");
      response.headers.set("Access-Control-Allow-Headers", "*");
      return response;
    } else if (pathname.startsWith(dataPrefix)) {
      // Leave the data path as-is
      return NextResponse.next();
    } else if (pathname.startsWith(basePath)) {
      return NextResponse.rewrite(url);
    } else {
      // Redirect to the root pages
      url.pathname = `${basePath}${pathname}`;
    }

    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
