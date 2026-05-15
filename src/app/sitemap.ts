import { MetadataRoute } from "next";
import { readFileSync } from "fs";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = "https://alanchips.com";
  const today = new Date().toISOString().split("T")[0];

  const fileContent = readFileSync(
    "src/app/(main)/blogs/blogData.tsx",
    "utf-8",
  );
  const urlMatches = [...fileContent.matchAll(/url:\s*"([^"]+)"/g)];
  const blogSlugs = urlMatches.map((match) => match[1]);

  const blogPages = blogSlugs.map((slug) => ({
    url: `${url}/${slug}`,
    lastModified: today,
  }));

  return [
    { url: url, lastModified: today },
    { url: `${url}/about`, lastModified: today },
    { url: `${url}/chips`, lastModified: today },
    { url: `${url}/blogs`, lastModified: today },
    { url: `${url}/contact`, lastModified: today },
    ...blogPages,
  ];
}
