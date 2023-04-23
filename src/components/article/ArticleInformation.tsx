import React from "react";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import { GithubIcon } from "../shared/svg/social/Icons";
import { ImageDataLike } from "gatsby-plugin-image";

interface ArticleInformationProps {
  author: string;
  date: string;
  readingTime: string;
  link?: string;
  authorimage?: ImageDataLike;
  className?: string;
}

export const ArticleInformation = ({
  author,
  authorimage,
  date,
  readingTime,
  link,
  className = ''
}: ArticleInformationProps) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <PreviewCompatibleImage
            className="h-10 w-10 rounded-full relative z-0"
            imageInfo={{
              image: authorimage,
              alt: `featured image thumbnail for post ${author}`,
            }}
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
            {author}
          </p>
          <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={date}>{date}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{readingTime}</span>
          </div>
        </div>
      </div>
      {link && (
        <a href={link} target="_blank" className="text-gray-500 hover:text-gray-700">
          <span className="sr-only">Project Link</span>
          <GithubIcon className="h-10 w-10" />
        </a>
      )}
    </div>
  );
};