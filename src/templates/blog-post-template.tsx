import React from "react";
import { DisqusConfig } from "gatsby-plugin-disqus";
import { Article, ArticleProps } from "../components/article";

interface BlogPostTemplateProps extends ArticleProps {
  slug: string;
}

export const BlogPostTemplate = (props: BlogPostTemplateProps) => {
  const siteUrl = "https://blouppy.com" + props.slug;
  const disqusConfig: DisqusConfig = {
    url: siteUrl,
    identifier: props.slug,
    title: props.title,
  };

  return (
    <Article 
      title={props.title} 
      date={props.date} 
      description={props.description} 
      tags={props.tags} 
      image={props.image}
      imageLink={props.imageLink}
      imageCreator={props.imageCreator}
      imageSource="https://unsplash.com/"
      author={props.author} 
      authorimage={props.authorimage} 
      readingTime={props.readingTime} 
      content={props.content} 
      disqusConfig={disqusConfig} />
  );
};