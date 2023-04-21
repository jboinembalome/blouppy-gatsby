import React from 'react'
import { PageProps, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { BlogListTemplate } from './blog-list-template'
import { Link } from 'gatsby'
import { Seo } from "../components/Seo"
import { IGatsbyImageData } from 'gatsby-plugin-image'

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
  return (
    <Layout>
      <Head siteMetadata={data.site.siteMetadata}/>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-violet-700 dark:bg-violet-400 rounded-lg shadow-xl overflow-hidden">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-gray-100 dark:text-gray-800 sm:text-4xl">
                <span className="block">Latest Articles</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-white dark:text-gray-900">
                On various topics such as C#, Asp.Net Core, WPF, Angular and many others! 😉
              </p>
              {/* <a
            href="#"
            className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-violet-600 dark:text-violet-400 hover:bg-violet-50"
          >
            Subscribe to newsletter
          </a> */}
            </div>
          </div>
        </div>
        <BlogListTemplate data={data} />
        <div className="py-4 flex items-center justify-between">
          <div className="w-0 flex-1 flex">
            {(pageContext as any).previousPagePath ? (
              <Link to={(pageContext as any).previousPagePath} className="btn">Previous</Link>) : null}
          </div>
          <div className="flex">
            <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">Page {(pageContext as any).humanPageNumber} of {(pageContext as any).numberOfPages}</span>
          </div>
          <div className="flex-1 flex justify-end">
            {(pageContext as any).nextPagePath ? (
              <Link to={(pageContext as any).nextPagePath} className="btn ml-3 ">Next</Link>) : null}
          </div>
        </div>
      </div>
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