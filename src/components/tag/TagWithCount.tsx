import { Link } from 'gatsby';
import React from 'react';
import { GroupType } from '../../types/graphql-queries';
import kebabCase from 'lodash/kebabCase';

interface TagWithCountProps {
  tag: GroupType;
}

export const TagWithCount = ({ tag }: TagWithCountProps) => (
  <span className="relative z-0 inline-flex shadow-sm rounded-md">
    <Link
      to={`/tags/${kebabCase(tag.fieldValue)}/`}
      className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white dark:bg-gray-900 text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-violet-500"
    >
      {tag.fieldValue}
    </Link>
    <span className="-ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white dark:bg-gray-900 text-sm font-medium text-gray-700 dark:text-gray-400">
      {tag.totalCount}
    </span>
  </span>
);
