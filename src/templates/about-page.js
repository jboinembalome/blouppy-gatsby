import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { AboutPageTemplate } from './about-page-template'
import { HTMLContent } from '../components/Content'
import { Helmet } from 'react-helmet'

const AboutPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <Helmet title={`Blouppy | About`} />
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.title}
        aboutimage={frontmatter.aboutimage}
        content={html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        aboutimage {
          childImageSharp {
            gatsbyImageData(width: 800, quality: 100, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`
