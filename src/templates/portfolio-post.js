import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { PortfolioPostTemplate } from './portfolio-post-template'
import { HTMLContent } from '../components/Content'

const PortfolioPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PortfolioPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        author={post.frontmatter.author}
        authorimage={post.frontmatter.authorimage}
        date={post.frontmatter.date}
        featuredimage={post.frontmatter.featuredimage}
        readingTime={post.fields.readingTime.text}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        link={post.frontmatter.link}
      />
    </Layout>
  )
}

PortfolioPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default PortfolioPost

export const pageQuery = graphql`query PortfolioPostByID($id: String!) {
  markdownRemark(id: {eq: $id}) {
    id
    html
    fields {
      readingTime {
        text
      }
    }
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
      description
      tags
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
      link
    }
  }
}
`
