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
    [key: string]: any;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      // items[field] = content;
      items[field] = parsedMarkdown;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  if (typeof data.published === "undefined" || data.published !== false) {
    items.published = true;
  } else {
    items.published = false;
  }
  return items;
}

export function getPostsByType(type: string, fields: string[] = []) {
  const slugs = getPostSlugsByType(type);

  const posts = slugs.map(async (slug) => {
    const post = await getPostBySlug(type, slug, fields);
    return post;
  });
  return Promise.all(posts).then((renderedPosts) => {
    return renderedPosts.filter((post) => post.published);
  });
}
