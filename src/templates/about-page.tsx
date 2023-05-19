import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { AboutPageTemplate } from './about-page-template'
import { Seo } from "../components/seo/Seo"
import { ImageDataLike, getSrc } from "gatsby-plugin-image"
import { AboutPageQuery } from '../types/graphql-queries';

const AboutPage = ({ data }: PageProps<AboutPageQuery>) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <>
      <Head 
        title={frontmatter.title}
        description={frontmatter.description}
        siteUrl={data.site.siteMetadata.siteUrl}
        authorName={data.site.siteMetadata.author.name}
        aboutimage={frontmatter.aboutimage} 
      />
      <AboutPageTemplate
        title={frontmatter.title}
        aboutimage={frontmatter.aboutimage}
        content={html}
      />
    </>
  )
}

interface HeadProps {
  title: string;
  description: string;
  siteUrl: string;
  authorName: string;
  aboutimage: ImageDataLike;
}

const Head = ({ title, description, siteUrl, authorName, aboutimage }: HeadProps) => {
  return (
    <Seo title={title} description={description} url={`${siteUrl}/about`}>
      <meta name="image" content={`${siteUrl}${getSrc(aboutimage)}`} />
      <meta property="og:image:alt" content={authorName} />
      <meta property="og:image" content={`${siteUrl}${getSrc(aboutimage)}`} />
    </Seo>);
};

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    site {
      siteMetadata {
        author {
          name
        }
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        aboutimage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
