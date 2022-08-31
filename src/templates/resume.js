import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { ResumePageTemplate } from './resume-template'
import { HTMLContent } from '../components/Content'
import { Seo } from "../components/Seo"

const ResumePage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout>
      <Head siteMetadata={data.site.siteMetadata} frontmatter={frontmatter}/>
      <ResumePageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        resumeimage={frontmatter.resumeimage}
        content={html}
      />
    </Layout>
  )
}

ResumePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

const Head = ({ siteMetadata, frontmatter }) => {
  const description = "Resume of Jimmy Boinembalome";

  return (
    <Seo title={frontmatter.title} description={description} url={`${siteMetadata.siteUrl}/resume`}>
      <meta name="image" content={`${siteMetadata.siteUrl}${frontmatter.resumeimage.childImageSharp.fluid.src}`} />
      <meta property="og:image:alt" content={siteMetadata.author.name} />
      <meta property="og:image" content={`${siteMetadata.siteUrl}${frontmatter.resumeimage.childImageSharp.fluid.src}`} />
    </Seo>);
};

export default ResumePage

export const resumePageQuery = graphql`
  query ResumePage($id: String!) {
    site {
      siteMetadata {
        author {
          name
        }
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        resumeimage {
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
