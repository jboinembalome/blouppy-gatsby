import React from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { Article } from '../components/article'

interface AboutPageTemplateProps {
  title: string;
  aboutimage: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  content: string;
}

export const AboutPageTemplate = ({ title, aboutimage, content }: AboutPageTemplateProps) => {

  return (
    <Article 
      title={title} 
      image={aboutimage}
      imageLink="https://www.instagram.com/zenasiart/?hl=fr"
      imageCreator="Asia Zeni"
      content={content} 
   />
  )
}