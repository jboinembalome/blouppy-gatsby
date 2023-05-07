import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { Layout } from '../../components/layout';
import { Seo } from "../../components/Seo"
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { Banner } from '../../components/banner'
import { Pagination } from '../../components/pagination'
import { Card, CardImage, CardContent } from '../../components/card';

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

type DataType = {
  site: {
    siteMetadata: SiteMetadataType;
  }
  allMarkdownRemark: {
    edges: EdgeType[];
  };
};

interface BlogListProps {
  blogs: EdgeType[];
}

const BlogList = ({ blogs }: BlogListProps) => {
  return (
     <section className="mt-8 mx-auto flex flex-col gap-y-8">
      {blogs && blogs.map(({ node: blog }) => (
          <Card key={blog.id} className="rounded-2xl bg-white dark:bg-gray-800 shadow md:mx-auto md:max-w-7xl md:grid md:grid-cols-2 md:gap-12 md:items-start">
            <CardImage link={blog.fields.slug} image={blog.frontmatter.featuredimage}  alt={`blog image thumbnail for post ${blog.frontmatter.title}`} containerClassName="relative h-full" className="absolute inset-0 h-full w-full rounded-t-lg md:rounded-none md:rounded-l-lg object-cover z-0" />
            <CardContent title={blog.frontmatter.title} description={blog.excerpt} date={blog.frontmatter.date} readingTime={`${blog.timeToRead} min read`} category={blog.frontmatter.category} categoryColor={blog.frontmatter.categorycolor} author={blog.frontmatter.author} authorimage={blog.frontmatter.authorimage} link={blog.fields.slug} className="relative mx-auto max-w-md p-6 sm:max-w-3xl" />
          </Card>
        ))}
    </section>
  )
};

const BlogListPage = ({ data, pageContext }: PageProps<DataType>) => {
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
      <BlogList blogs={data.allMarkdownRemark.edges} />
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

export default BlogListPage

export const pageQuery = graphql`
  query BlogListPage($skip: Int!, $limit: Int!) {
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
