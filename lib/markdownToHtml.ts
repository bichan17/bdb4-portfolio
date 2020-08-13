import remark from "remark";
import html from "remark-html";
import externalLinks from "remark-external-links";
import wrapLinkContent from "./wrapLinkContent";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(externalLinks, {
      target: ["_blank"],
      rel: ["nofollow"],
    })
    .use(wrapLinkContent)
    .use(html)
    .process(markdown);
  return result.toString();
}
