import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import markdownToHtml from "../lib/markdownToHtml";

export function getPostSlugsByType(type: string) {
  const postsDirectory = join(process.cwd(), `_portfolio/${type}`);
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(
  type: string,
  slug: string,
  fields: string[] = []
) {
  const postsDirectory = join(process.cwd(), `_portfolio/${type}`);
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const parsedMarkdown = await markdownToHtml(content || "");

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = parsedMarkdown;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getPostsByType(type: string, fields: string[] = []) {
  const slugs = getPostSlugsByType(type);

  const promises = slugs.map(async (slug) => {
    const post = await getPostBySlug(type, slug, fields);
    return post;
  });
  // .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return Promise.all(promises);
}
