import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { IndexPageTemplate } from './index-page-template'

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
    frontmatter {
      title
      image {
        childImageSharp {
          fluid(maxWidth: 450, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heading
      subheading
      mainpitch {
        title
        description
      }
    }
  }
}
`
