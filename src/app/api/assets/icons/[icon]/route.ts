import { promises as fs } from "node:fs";

/**
 * Icon folders' paths from the 'src' folder
 */
const iconsFolders = ["/core/service/icons/assets"];

export async function GET(
  request: Request,
  { params }: { params: Promise<{ icon: string }> }
) {
  const { icon } = await params;

  const rootFolder = process.cwd();
  const srcPath = rootFolder + "/src";

  for (const iconFolder of iconsFolders) {
    try {
      const iconPath = srcPath + iconFolder + `/${icon}.svg`;
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
