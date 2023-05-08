import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { Layout } from '../components/layout';
import { PortfolioPostTemplate } from './portfolio-post-template'
import { Seo } from "../components/Seo"
import { ImageDataLike, getSrc } from "gatsby-plugin-image"
import { PortfolioPostQuery } from '../types/graphql-queries';

const PortfolioPost = ({ data }: PageProps<PortfolioPostQuery>) => {
  const { markdownRemark: post } = data;
  const readingTime = `${post.timeToRead} min read`

  return (
    <Layout>
      <Head slug={post.fields.slug} title={post.frontmatter.title} description={post.frontmatter.description} siteUrl={data.site.siteMetadata.siteUrl} featuredimage={post.frontmatter.featuredimage} />
      <PortfolioPostTemplate
        content={post.html}
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
  slug: string;
  title: string;
  description: string;
  siteUrl: string;
  featuredimage: ImageDataLike;
}

const Head = ({ slug, title, description, siteUrl, featuredimage }: HeadProps) => {
  return (
    <Seo title={title} description={description} url={`${siteUrl}${slug}`}>
      <meta name="image" content={`${siteUrl}${getSrc(featuredimage)}`} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image" content={`${siteUrl}${getSrc(featuredimage)}`} />
    </Seo>);
};

export default PortfolioPost

export const pageQuery = graphql`
  query PortfolioPost($id: String!) {
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
