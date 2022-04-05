import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { ResumePageTemplate } from './resume-template'
import { HTMLContent } from '../components/Content'
import { Helmet } from 'react-helmet'

const ResumePage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout>
      <ResumePageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        resumeimage={frontmatter.resumeimage}
        content={html}
        helmet={
          <Helmet title="Blouppy | Resume">
            <meta name="description" content="Resume of Jimmy Boinembalome" />
            <meta name="image" content={`https://blouppy.com${frontmatter.resumeimage.childImageSharp.fluid.src}`} />
            <meta property="og:image:alt" content={`${frontmatter.title}`} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:image" content={`https://blouppy.com${frontmatter.resumeimage.childImageSharp.fluid.src}`} />) 
            <meta property="og:title" content={`${frontmatter.title}`} />
            <meta property="og:description" content="Resume of Jimmy Boinembalome" />
            <meta property="og:url" content="https://blouppy.com/resume" />
            <meta property="og:site_name" content="https://blouppy.com" />
          </Helmet>
        }
      />
    </Layout>
  )
}

ResumePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ResumePage

export const resumePageQuery = graphql`
  query ResumePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        resumeimage {
          childImageSharp {
            fluid(maxWidth: 450, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
