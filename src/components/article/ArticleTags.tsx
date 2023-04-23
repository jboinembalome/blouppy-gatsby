import React from "react";
import { Tag } from "../tag";
import kebabCase from "lodash/kebabCase";

interface ArticleTagsProps {
  tags: string[];
  title?: string;
}

export const ArticleTags = ({
  tags,
  title = 'Tags'
}: ArticleTagsProps) => {
  return (
    <div className="prose lg:prose-lg dark:prose-invert prose-indigo">
      <h4>{title}</h4>
      {tags && tags.length ? (
        <div className="not-prose">
          <ul role="list" className="mt-2 pl-0 leading-8">
            {tags.map((tag) => (
              <li key={tag + `tag`} className="inline pl-0 pr-2">
                <Tag text={tag} color="bg-violet-100 text-violet-800" link={`/tags/${kebabCase(tag)}/`} className="no-underline" />
              </li>
            ))}
          </ul>
        </div>
      ) : <></>}
    </div>
  );
};