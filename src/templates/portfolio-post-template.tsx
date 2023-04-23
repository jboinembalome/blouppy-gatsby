import React from "react";
import { Article, ArticleProps } from "../components/article";

interface PortfolioPostTemplateProps extends ArticleProps {
}

export const PortfolioPostTemplate = (props: PortfolioPostTemplateProps) => {

  return (
    <Article 
      title={props.title} 
      date={props.date} 
      description={props.description} 
      tags={props.tags} 
      image={props.image} 
      author={props.author} 
      authorimage={props.authorimage} 
      readingTime={props.readingTime} 
      link={props.link} 
      content={props.content} 
      contentComponent={props.contentComponent} />
  );
};
