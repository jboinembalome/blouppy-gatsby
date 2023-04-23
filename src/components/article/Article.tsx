import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import Content, { HTMLContent } from "../Content";
import { ArticleInformation } from "./ArticleInformation";
import { ArticleImage } from "./ArticleImage";
import { ArticleTags } from "./ArticleTags";
import { DisqusConfig } from "gatsby-plugin-disqus";
import { ArticleComments } from "./ArticleComments";
import { ArticleImageCaption } from "./ArticleImageCaption";

export interface ArticleProps {
    title: string;
    date: string;
    description: string;
    tags: string[];
    image: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
        };
    };
    imageLink?: string;
    imageCreator?: string;
    author: string;
    authorimage: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
        };
    };
    readingTime: string;
    content: string | TrustedHTML;
    contentComponent: typeof HTMLContent;
    link?: string;
    disqusConfig?: DisqusConfig;
}

export const Article = (props: ArticleProps) => {
    const ArticleContent = props.contentComponent || Content;

    return (
        <section className="max-w-prose mx-auto flex flex-col gap-4 overflow-hidden">
            <ArticleInformation author={props.author} authorimage={props.authorimage} date={props.date} readingTime={props.readingTime ?? ''} link={props.link} />
            <h1 className="block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                {props.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 leading-8">
                {props.description}
            </p>
            <ArticleImage image={props.image} alt={`featured image thumbnail for post ${props.title}`} />
            {props.imageLink && props.imageCreator && (
                <ArticleImageCaption imageLink={props.imageLink} imageCreator={props.imageCreator} />
            )}
            <ArticleContent
                className="unreset prose lg:prose-lg dark:prose-invert prose-indigo"
                content={props.content}
            />
            <ArticleTags tags={props.tags} />
            {props.disqusConfig && (
                <ArticleComments disqusConfig={props.disqusConfig} />
            )}
        </section>
    );
};
