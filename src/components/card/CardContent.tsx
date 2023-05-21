import React from 'react';
import { Link } from 'gatsby';
import { ImageDataLike } from 'gatsby-plugin-image';
import { ArticleInformation } from '../article';
import { Tag } from '../tag';
import { ButtonInternalLink } from '../button';

export interface CardContentProps {
    title?: string;
    description?: string;
    date: string;
    readingTime?: string;
    sourceCodeLink?: string;
    category?: string;
    categoryColor?: string;
    author: string;
    authorimage?: ImageDataLike;
    className?: string;
}

export const CardContent = ({ title, description, date, readingTime, sourceCodeLink, category, categoryColor, author, authorimage, className }: CardContentProps) => {
    return (
        <div className={className}>
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
    );
};
