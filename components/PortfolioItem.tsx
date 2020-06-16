import DateFormater from "./DateFormater";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import markdownToHtml from "../lib/markdownToHtml";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  title: string;
  date: string;
  slug: string;
  content: string;
};

const PortfolioItem = ({ title, date, slug, content }: Props) => {
  // console.log(content);

  // const [parsedContent, setContent] = useState();

  // useEffect(() => {
  //   const parseMarkdown = async () => {
  //     const result: string = await markdownToHtml(content || "");

  //     setContent(result);
  //   };

  //   parseMarkdown();
  // }, []);

  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">{date}</div>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PortfolioItem;
