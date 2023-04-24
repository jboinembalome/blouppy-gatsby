import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { Layout } from '../components/layout';
import { BlogListTemplate } from './blog-list-template'
import { Seo } from "../components/Seo"
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { Banner } from '../components/banner'
import { Pagination } from '../components/pagination'

type SiteMetadataType = {
  siteUrl: string;
};

type FrontmatterType = {
  title: string;
  templateKey: string;
  date: string;
  category: string;
  categorycolor: string;
  featuredpost: boolean;
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
};

type NodeType = {
  timeToRead: number;
  excerpt: string;
  id: string;
  fields: {
    slug: string;
  };
  frontmatter: FrontmatterType;
};

type EdgeType = {
  node: NodeType;
};

export type DataType = {
  site: {
    siteMetadata: SiteMetadataType;
  }
  allMarkdownRemark: {
    edges: EdgeType[];
  };
};

const BlogList = ({ data, pageContext }: PageProps<DataType>) => {
  const bannerTitle = "Latest Articles";
  const bannerSubtitle = "On various topics such as C#, Asp.Net Core, WPF, Angular and many others! 😉";
  const previousPagePath = (pageContext as any).previousPagePath;
  const nextPagePath = (pageContext as any).nextPagePath;
  const humanPageNumber = (pageContext as any).humanPageNumber;
  const numberOfPages = (pageContext as any).numberOfPages;
  const previousPageButtonText = "Previous";
  const nextPageButtonText = "Next";

  return (
    <Layout>
      <Head siteMetadata={data.site.siteMetadata} />
      <Banner title={bannerTitle} subtitle={bannerSubtitle} className="bg-violet-700 dark:bg-violet-400 rounded-lg shadow-xl overflow-hidden" />
      <BlogListTemplate data={data} />
      <Pagination previousPagePath={previousPagePath} nextPagePath={nextPagePath} humanPageNumber={humanPageNumber} numberOfPages={numberOfPages} previousPageButtonText={previousPageButtonText} nextPageButtonText={nextPageButtonText} className="py-4 flex items-center justify-between" />
    </Layout>
  )
}

interface HeadProps {
  siteMetadata: SiteMetadataType;
}

const Head = ({ siteMetadata }: HeadProps) => {
  const description = "Blog of technology articles";

  return <Seo title="Blog" description={description} url={`${siteMetadata.siteUrl}/blog`} />
};

export default BlogList

export const pageQuery = graphql`
query BlogList($skip: Int!, $limit: Int!) {
  site {
    siteMetadata {
      siteUrl
    }
  }
  allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    skip: $skip
    limit: $limit
    filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
  ) {
    edges {
      node {
        timeToRead
        excerpt(pruneLength: 200)
        id
        fields {
          slug
        }
        frontmatter {
          title
          templateKey
          date(formatString: "MMMM DD, YYYY")
          category
          categorycolor
          featuredpost
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
        }
      }
    }
  }
}
`
