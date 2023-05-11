import { Link } from 'gatsby';
import React from 'react';

export interface PaginationProps {
    previousPagePath: string;
    nextPagePath: string;
    previousPageButtonText: string;
    nextPageButtonText: string;
    humanPageNumber: number;
    numberOfPages: number;
    className?: string;
}

export const Pagination = ({ previousPagePath, nextPagePath, previousPageButtonText, nextPageButtonText, humanPageNumber, numberOfPages, className }: PaginationProps) => {
    return (
        <div className={className}>
          <div className="w-0 flex-1 flex">
            {previousPagePath ? (
              <Link to={previousPagePath} className="btn">{previousPageButtonText}</Link>) : null}
          </div>
          <div className="flex">
            <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">Page {humanPageNumber} of {numberOfPages}</span>
          </div>
          <div className="flex-1 flex justify-end">
            {nextPagePath ? (
              <Link to={nextPagePath} className="btn ml-3 ">{nextPageButtonText}</Link>) : null}
          </div>
        </div>
    );
};
