import React from 'react';
import { Link } from 'gatsby';
import { ImageDataLike } from 'gatsby-plugin-image';
import ArticleInformation from '../ArticleInformation';
import { Tag } from '../tag';

export interface CardContentProps {
    title?: string;
    description?: string;
    date: string;
    readingTime?: string;
    link?: string;
    sourceCodeLink?: string;
    category?: string;
    categoryColor?: string;
    author: string;
    authorimage?: ImageDataLike;
    className?: string;
}

export const CardContent = ({ title, description, date, readingTime, link, sourceCodeLink, category, categoryColor, author, authorimage, className }: CardContentProps) => {
    return (
        <div className={className}>
            <div className="flex-1 flex flex-col justify-between">
                <div className="flex-1">
                    <Tag text={category} color={categoryColor}/>
                    <div className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                            {title}
                        </p>
                        <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                            {description}
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <Link className="btn-white-sm mt-6" to={link ?? ''}>
                            Continue Reading
                        </Link>
                    </div>
                </div>
                <ArticleInformation
                    author={author}
                    authorimage={authorimage}
                    date={date}
                    readingTime={readingTime ?? ''}
                    link={sourceCodeLink}
                    className="mt-6"
                />
            </div>
        </div>
    );
};
