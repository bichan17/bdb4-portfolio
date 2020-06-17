import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import markdownToHtml from "../lib/markdownToHtml";

const postsDirectory = join(process.cwd(), "_portfolio");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug: string, fields: string[] = []) {
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

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();

  const promises = slugs.map(async (slug) => {
    const post = await getPostBySlug(slug, fields);
    return post;
  });
  // .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return Promise.all(promises);
}
