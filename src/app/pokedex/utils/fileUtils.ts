import fsPromises from "fs/promises";
import path from "path";

export const rootDir = process.cwd();

export async function getFile(folder: string, file: string) {
  const filePath = file.endsWith(".json") ? file : `${file}.json`;
  const jsonFile = await fsPromises.readFile(
    path.resolve(rootDir, `public/data/pokedex/${folder}/${filePath}`)
  );
  return JSON.parse(jsonFile.toString());
}

export async function getFirstFileNameInFolder(
  folder: string
): Promise<string> {
  const files = await fsPromises.readdir(
    path.resolve(rootDir, `public/data/pokedex/${folder}`)
  );
  return files[0];
}
