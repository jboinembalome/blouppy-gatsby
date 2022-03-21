import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { BlogPostTemplate } from './blog-post-template'
import { HTMLContent } from '../components/Content'

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        author={post.frontmatter.author}
        authorimage={post.frontmatter.authorimage}
        date={post.frontmatter.date}
        featuredimage={post.frontmatter.featuredimage}
        slug={post.fields.slug}
        readingTime={post.fields.readingTime.text}
        helmet={
          <Helmet titleTemplate="%s | Article">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            <meta name="image" content={`https://blouppy.com${post.frontmatter.featuredimage.childImageSharp.fluid.src}`} />
            <meta property="og:type" content="blog" />
            <meta property="og:image:alt" content={`${post.frontmatter.title}`} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:image" content={`https://blouppy.com${post.frontmatter.featuredimage.childImageSharp.fluid.src}`} />) 
            <meta property="og:title" content={`${post.frontmatter.title}`} />
            <meta property="og:description" content={`${post.frontmatter.description}`} />
            <meta property="og:url" content={`https://blouppy.com${post.fields.slug}`} />
            <meta property="og:site_name" content="https://blouppy.com" />
            <meta property="article:author" content="Jimmy Boinembalome" />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`query BlogPostByID($id: String!) {
  markdownRemark(id: {eq: $id}) {
    id
    html
    fields {
      slug
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
    }
  }
}
`
