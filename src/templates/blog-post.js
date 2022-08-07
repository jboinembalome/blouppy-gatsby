import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { BlogPostTemplate } from './blog-post-template'
import { HTMLContent } from '../components/Content'
import { Seo } from "../components/Seo"

const BlogPost = ({
  data: {
    markdownRemark: post,
  } }) => {

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        author={post.frontmatter.author}
        authorimage={post.frontmatter.authorimage}
        date={post.frontmatter.date}
        featuredauthor={post.frontmatter.featuredauthor}
        featuredlink={post.frontmatter.featuredlink}
        featuredimage={post.frontmatter.featuredimage}
        slug={post.fields.slug}
        readingTime={post.fields.readingTime.text}
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

export const Head = ({
  data: {
    site: { siteMetadata },
    markdownRemark: { fields, frontmatter },
  } }) => {
  return (
    <Seo title={frontmatter.title} description={frontmatter.description} url={`${siteMetadata.siteUrl}${fields.slug}`}>
      <meta name="image" content={`${siteMetadata.siteUrl}${frontmatter.featuredimage.childImageSharp.fluid.src}`} />
      <meta property="og:image:alt" content={frontmatter.title} />
      <meta property="og:image" content={`${siteMetadata.siteUrl}${frontmatter.featuredimage.childImageSharp.fluid.src}`} />
    </Seo>);
};

export default BlogPost

export const pageQuery = graphql`query BlogPostByID($id: String!) {
  site {
    siteMetadata {
      siteUrl
    }
  }
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
      featuredauthor
      featuredlink
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
