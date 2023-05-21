import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { Seo } from "../components/seo/Seo"
import { Banner } from '../components/banner'
import { Pagination } from '../components/pagination'
import { Card, CardImage, CardContent } from '../components/card';
import { BlogsPageQuery } from '../types/graphql-queries';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

interface BlogListProps {
  data: BlogsPageQuery;
}

const BlogList = ({ data }: BlogListProps) => {
  const blogs = data.allMarkdownRemark.edges;
  return (
     <section className="mt-8 mx-auto flex flex-col gap-y-8">
      {blogs && blogs.map(({ node: blog }) => (
          <Card key={blog.id} link={blog.fields.slug} className="rounded-2xl bg-white dark:bg-gray-900 shadow md:mx-auto md:max-w-7xl md:grid md:grid-cols-2 md:gap-12 md:items-start transition ease-in-out hover:-translate-y-1 hover:scale-[1.02]">
            <CardImage image={blog.frontmatter.featuredimage}  alt={`blog image thumbnail for post ${blog.frontmatter.title}`} containerClassName="relative h-full flex-shrink-0" className="inset-0 h-full w-full rounded-t-lg md:rounded-none md:rounded-l-lg object-cover z-0" />
            <CardContent title={blog.frontmatter.title} description={blog.excerpt} date={blog.frontmatter.date} readingTime={`${blog.timeToRead} min read`} category={blog.frontmatter.category} categoryColor={blog.frontmatter.categorycolor} author={blog.frontmatter.author} authorimage={blog.frontmatter.authorimage} className="relative h-full flex flex-col justify-between mx-auto max-w-md p-6 sm:max-w-3xl" />
          </Card>
        ))}
    </section>
  )
};

const BlogsPage = ({ data, pageContext }: PageProps<BlogsPageQuery>) => {
  const bannerTitle = "Latest Articles";
  const bannerSubtitle = "On various topics such as C#, Asp.Net Core, WPF, Angular and many others! 😉";
  const previousPagePath = (pageContext as any).previousPagePath;
  const nextPagePath = (pageContext as any).nextPagePath;
  const humanPageNumber = (pageContext as any).humanPageNumber;
  const numberOfPages = (pageContext as any).numberOfPages;
  const previousPageButtonText = "Previous";
  const nextPageButtonText = "Next";

  return (
    <>
      <Head />
      <Banner title={bannerTitle} subtitle={bannerSubtitle} className="bg-primary-500 dark:bg-primary-300 text-gray-100 dark:text-gray-900 rounded-lg shadow-xl overflow-hidden" />
      <BlogList data={data} />
      <Pagination previousPagePath={previousPagePath} nextPagePath={nextPagePath} humanPageNumber={humanPageNumber} numberOfPages={numberOfPages} previousPageButtonText={previousPageButtonText} nextPageButtonText={nextPageButtonText} className="py-4 flex items-center justify-between" />
    </>
  )
}

const Head = () => {
  const { siteUrl } = useSiteMetadata();
  const description = "Blog of technology articles";

  return <Seo title="Blog" description={description} url={`${siteUrl}/blog`} />
};

export default BlogsPage

export const pageQuery = graphql`
  query BlogsPage($skip: Int, $limit: Int) {
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
