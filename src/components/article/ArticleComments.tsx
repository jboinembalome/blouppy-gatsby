import React from 'react';
import { Disqus, DisqusConfig } from 'gatsby-plugin-disqus';

export interface ArticleCommentsProps {
  disqusConfig: DisqusConfig;
}

export const ArticleComments = ({ disqusConfig }: ArticleCommentsProps) => {

  return (
    <div className="bg-gray-900 dark:bg-gray-900 px-4 pt-2 rounded-md mt-8 prose lg:prose-lg dark:prose-invert prose-indigo">
      <Disqus config={disqusConfig} />
    </div>
  )
};