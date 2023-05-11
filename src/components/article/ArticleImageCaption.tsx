import React from 'react';
import { CameraIcon } from '@heroicons/react/24/solid';

export interface ArticleImageCaptionProps {
  imageLink: string;
  imageCreator: string;
  source?: string;
}

export const ArticleImageCaption = ({ imageLink, imageCreator, source }: ArticleImageCaptionProps) => {

  return (
    <figcaption className="flex text-sm text-gray-500 dark:text-gray-400">
      <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
      <span className="ml-2">
        Photo by{" "}
        <a href={imageLink} target="_blank" className="underline hover:text-gray-600 dark:hover:text-gray-500">
          {imageCreator}
        </a>{" "}
        {source && (
          <>
            on{" "}
            <a href={source} target="_blank" className="underline hover:text-gray-600 dark:hover:text-gray-500">
              Unsplash
            </a>
          </>
        )}
      </span>
    </figcaption>
  )
};