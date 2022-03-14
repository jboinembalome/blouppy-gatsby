import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { ResumePageTemplate } from './resume-template'
import { HTMLContent } from '../components/Content'

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
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
