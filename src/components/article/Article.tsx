import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { Content, HTMLContent } from "../layout/Content";
import { ArticleInformation } from "./ArticleInformation";
import { ArticleImage } from "./ArticleImage";
import { ArticleTags } from "./ArticleTags";
import { DisqusConfig } from "gatsby-plugin-disqus";
import { ArticleComments } from "./ArticleComments";
import { ArticleImageCaption } from "./ArticleImageCaption";

export interface ArticleProps {
    title: string;
    content: string | JSX.Element | JSX.Element[];
    date?: string;
    description?: string;
    tags?: string[];
    author?: string;
    authorimage?: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
        };
    };
    readingTime?: string;
    image?: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
        };
    };
    imageLink?: string;
    imageCreator?: string;
    imageSource?: string;
    link?: string;
    disqusConfig?: DisqusConfig;
}

export const Article = (props: ArticleProps) => {
 const isNotHTMLContent = typeof props.content !== 'string';
    return (
        <section className="max-w-prose mx-auto flex flex-col gap-4 overflow-hidden">
            {props.author && props.date && (
                <ArticleInformation author={props.author} authorimage={props.authorimage} date={props.date} readingTime={props.readingTime ?? ''} link={props.link} />
            )}
            <h1 className="block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                {props.title}
            </h1>
            {props.description && (
                <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 leading-8">
                    {props.description}
                </p>
            )}
            {props.image && (
                <ArticleImage image={props.image} alt={`featured image thumbnail for post ${props.title}`} />
            )}
            {props.imageLink && props.imageCreator && (
                <ArticleImageCaption imageLink={props.imageLink} imageCreator={props.imageCreator} source={props.imageSource} />
            )}
            {isNotHTMLContent && React.isValidElement(props.content)
                ? <Content className="unreset prose lg:prose-lg dark:prose-invert prose-indigo" content={props.content} />
                : <HTMLContent className="unreset prose lg:prose-lg dark:prose-invert prose-indigo" content={props.content} />
            }
            {props.tags && props.tags.length && (
                <ArticleTags tags={props.tags} />
            )}
            {props.disqusConfig && (
                <ArticleComments disqusConfig={props.disqusConfig} />
            )}
        </section>
    );
};
