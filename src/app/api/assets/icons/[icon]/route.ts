import { promises as fs } from "node:fs";

/**
 * Assets folder path from the 'src' folder
 */
const assetsFolders = ["/core/assets"];

export async function GET(
  request: Request,
  { params }: { params: Promise<{ icon: string }> }
) {
  const { icon } = await params;

  const rootFolder = process.cwd();
  const srcPath = rootFolder + "/src";

  for (const assetsPath of assetsFolders) {
    try {
      const iconPath = srcPath + assetsPath + `/icons/${icon}.svg`;
      const fileContent = await fs.readFile(iconPath, "utf-8");

      return new Response(fileContent, {
        status: 200,
        headers: { "Content-Type": "image/svg+xml" },
      });
    } catch (error) {}
  }

  return new Response(
    JSON.stringify({ message: `No icon named ${icon} was found`, status: 404 }),
    {
      status: 404,
      headers: { "Content-Type": "application/json" },
    }
  );
}
