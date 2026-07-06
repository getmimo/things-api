import { NextRequest, NextResponse } from "next/server";

const CRYPTO_CRAZE_API_KEY = "mimo-api-key-34d1-1g3f-27s1";

export function middleware(request: NextRequest) {
  const { hostname, pathname } = request.nextUrl;
  const requestHost =
    request.headers.get("host")?.split(":")[0].toLowerCase() ?? hostname;

  const rewriteMap: { [key: string]: string } = {
    "swapi.mimo.dev": "/swapi",
    "pokedex.mimo.dev": "/pokedex",
    "rickandmorty.mimo.dev": "/rickandmorty",
    "things.mimo.dev": "/things",
    "crypto-craze.mimo.dev": "/cryptocraze",
    "airports.mimo.dev": "/airports",
  };

  const apiPrefix = "/api";
  const dataPrefix = "/data";
  const staticAssetPattern = /\.[^/]+$/;

  if (pathname.startsWith("/_next") || staticAssetPattern.test(pathname)) {
    return NextResponse.next();
  }

  const basePath = rewriteMap[hostname] ?? rewriteMap[requestHost];

  if (basePath) {
    const url = request.nextUrl.clone();

    if (pathname.startsWith(apiPrefix)) {
      // Crypto Craze requires a fake API key for any /api request
      if (requestHost === "crypto-craze.mimo.dev") {
        const apiKey = request.headers.get("api-key");
        if (apiKey !== CRYPTO_CRAZE_API_KEY) {
          return new NextResponse(
            JSON.stringify({ error: "Missing or invalid API key." }),
            {
              status: 401,
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Headers": "*",
              },
            }
          );
        }
      }

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
