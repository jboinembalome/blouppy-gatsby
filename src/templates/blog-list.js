import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { BlogListTemplate } from './blog-list-template'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

const BlogList = ({ data, pageContext }) => {
  return (
    <Layout>
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-violet-700 dark:bg-violet-500 rounded-lg shadow-xl overflow-hidden">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Latest Articles</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-violet-200">
                Every Wednesday an article is added 😉
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
        <section className="mt-8">
          <Helmet titleTemplate="%s | Blogs">
            <meta
              name="blogs"
              content="Blog of technology articles"
            />
          </Helmet>
          <BlogListTemplate
            data={data}
          />
        </section>

        <div className="mt-8 flex-1 flex justify-between sm:justify-end">
          {pageContext.previousPagePath ? (
            <Link to={pageContext.previousPagePath} className="btn">Previous</Link>) : null}
          {pageContext.nextPagePath ? (
            <Link to={pageContext.nextPagePath} className="btn ml-3 ">Next</Link>) : null}
        </div>
      </div>
    </Layout>
  )
}

BlogList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default BlogList

export const pageQuery = graphql`query BlogList($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]}
    skip: $skip
    limit: $limit
    filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
  ) {
    edges {
      node {
        excerpt(pruneLength: 200)
        id
        fields {
          slug
          readingTime {
            text
          }
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
              fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          author
          authorimage {
            childImageSharp {
              fluid(maxWidth: 450, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`