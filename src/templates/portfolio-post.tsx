import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { Layout } from '../components/layout';
import { PortfolioPostTemplate } from './portfolio-post-template'
import { HTMLContent } from '../components/Content'
import { Seo } from "../components/Seo"
import { IGatsbyImageData, getSrc } from "gatsby-plugin-image"


type SiteMetadataType = {
  siteUrl: string;
};

type FieldsType = {
  slug: string;
};

type FrontmatterType = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  featuredpost: boolean;
  featuredlink: string;
  featuredauthor:string;
  featuredimage: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  author: string;
  authorimage: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  link: string;
};

type DataType = {
  site: {
    siteMetadata: SiteMetadataType;
  };
  markdownRemark: {
    html: string | TrustedHTML;
    timeToRead: number;
    excerpt: string;
    id: string;
    fields: FieldsType;
    frontmatter: FrontmatterType;
  };
};

const PortfolioPost = ({ data }: PageProps<DataType>) => {
  const { markdownRemark: post } = data;
  const readingTime = `${post.timeToRead} min read`

  return (
    <Layout>
      <Head siteMetadata={data.site.siteMetadata} fields={post.fields} frontmatter={post.frontmatter}/>
      <PortfolioPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        author={post.frontmatter.author}
        authorimage={post.frontmatter.authorimage}
        date={post.frontmatter.date}
        image={post.frontmatter.featuredimage}
        readingTime={readingTime}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        link={post.frontmatter.link}
      />
    </Layout>
  )
}

interface HeadProps {
  siteMetadata: SiteMetadataType;
  fields: FieldsType;
  frontmatter: FrontmatterType;
}

const Head = ({ siteMetadata, fields, frontmatter }: HeadProps) => {
  return (
    <Seo title={frontmatter.title} description={frontmatter.description} url={`${siteMetadata.siteUrl}${fields.slug}`}>
      <meta name="image" content={`${siteMetadata.siteUrl}${getSrc(frontmatter.featuredimage)}`} />
      <meta property="og:image:alt" content={frontmatter.title} />
      <meta property="og:image" content={`${siteMetadata.siteUrl}${getSrc(frontmatter.featuredimage)}`} />
    </Seo>);
};

export default PortfolioPost

export const pageQuery = graphql`query PortfolioPostByID($id: String!) {
  site {
    siteMetadata {
      siteUrl
    }
  }
  markdownRemark(id: {eq: $id}) {
    id
    html
    timeToRead
    fields {
      slug
    }
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
      description
      tags
      featuredimage {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      author
      authorimage {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      link
    }
  }
}
`
