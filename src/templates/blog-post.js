import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { BlogPostTemplate } from './blog-post-template'
import { HTMLContent } from '../components/Content'
import { Seo } from "../components/Seo"
import { getSrc } from "gatsby-plugin-image"

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Head siteMetadata={data.site.siteMetadata} fields={post.fields} frontmatter={post.frontmatter}/>
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

const Head = ({ siteMetadata, fields, frontmatter }) => {
  return (
    <Seo title={frontmatter.title} description={frontmatter.description} url={`${siteMetadata.siteUrl}${fields.slug}`}>
      <meta name="image" content={`${siteMetadata.siteUrl}${getSrc(frontmatter.featuredimage)}`} />
      <meta property="og:image:alt" content={frontmatter.title} />
      <meta property="og:image" content={`${siteMetadata.siteUrl}${getSrc(frontmatter.featuredimage)}`} />
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
`
