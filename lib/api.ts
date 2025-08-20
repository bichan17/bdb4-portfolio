import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import markdownToHtml from "../lib/markdownToHtml";

export function getPostSlugsByType(type: string) {
  const postsDirectory = join(process.cwd(), `_portfolio/${type}`);
  return fs.readdirSync(postsDirectory);
}

function isNumeric(str: string) {
  if (typeof str != "string") return false; // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
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

  const sortedSlugs: string[] = [];

  slugs.forEach((slug) => {
    const slugOrder = slug.split("_")[0];
    if (isNumeric(slugOrder)) {
      const intSlugOrder = parseInt(slugOrder);
      sortedSlugs.splice(intSlugOrder - 1, 0, slug);
    }
  });

  const posts = sortedSlugs.map(async (slug) => {
    const post = await getPostBySlug(type, slug, fields);

    return post;
  });
  return Promise.all(posts).then((renderedPosts) => {
    return renderedPosts.filter((post) => post.published);
  });
}
