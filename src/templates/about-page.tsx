import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { Layout } from '../components/layout';
import { AboutPageTemplate } from './about-page-template'
import { HTMLContent } from '../components/Content'
import { Seo } from "../components/Seo"
import { IGatsbyImageData, getSrc } from "gatsby-plugin-image"

type AuthorType = {
  name: string;
};

type SiteMetadataType = {
  author: AuthorType;
  siteUrl: string;
};

type FrontmatterType = {
  title: string;
  aboutimage: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
};

type DataType = {
  site: {
    siteMetadata: SiteMetadataType;
  }
  markdownRemark: {
    html: string | TrustedHTML;
    frontmatter: FrontmatterType
  };
};

const AboutPage = ({ data }: PageProps<DataType>) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <Head siteMetadata={data.site.siteMetadata} frontmatter={frontmatter}/>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.title}
        aboutimage={frontmatter.aboutimage}
        content={html}
      />
    </Layout>
  )
}

interface HeadProps {
  siteMetadata: SiteMetadataType;
  frontmatter: FrontmatterType;
}

const Head = ({ siteMetadata, frontmatter }: HeadProps) => {
  const description = "About Jimmy Boinembalome";

  return (
    <Seo title={frontmatter.title} description={description} url={`${siteMetadata.siteUrl}/about`}>
      <meta name="image" content={`${siteMetadata.siteUrl}${getSrc(frontmatter.aboutimage)}`} />
      <meta property="og:image:alt" content={siteMetadata.author.name} />
      <meta property="og:image" content={`${siteMetadata.siteUrl}${getSrc(frontmatter.aboutimage)}`} />
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
        aboutimage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
