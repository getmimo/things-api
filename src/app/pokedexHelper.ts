export const runtime = "edge";

import { fetchData } from "@/app/dataHelper";

interface DataEntry {
    id: string;
    name: string;
}

export async function handleRequest(request: Request, endpoint: string, id: string): Promise<Response> {
      // We check for a number in the id parameter to check if we are searchring for the entity by id or name
    if (!isNaN(Number(id))) {
        const allDataResponse = await fetchData(request, `pokedex/${endpoint}`, "all");
        if (!allDataResponse.ok) {
            return new Response("Internal error", { status: 500 });
        }

        const allData = await allDataResponse.json() as DataEntry[];
        const entry = allData.find(d => d.id === id);

        if (entry && entry.name) {
            return fetchData(request, `pokedex/${endpoint}`, entry.name);
        } else {
            return new Response("Not found", { status: 404 });
        }
    } else {
        return fetchData(request, `pokedex/${endpoint}`, id);
    }
}