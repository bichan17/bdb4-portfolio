import DateFormater from "./DateFormater";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import markdownToHtml from "../lib/markdownToHtml";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  title: string;
  date: string;
  slug: string;
  tags: Array<string>;
  content: string;
};

const PortfolioItem = ({ title, date, slug, tags, content }: Props) => {
  return (
    <div>
      <h3>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div>{date}</div>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {tags && <div>{tags.toString().replace(/,/g, ", ")}</div>}
    </div>
  );
};

export default PortfolioItem;
