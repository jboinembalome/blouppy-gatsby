import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { IndexPageTemplate } from './index-page-template'
import { Helmet } from 'react-helmet'

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
        helmet={
          <Helmet title="Blouppy">
            <meta name="description" content={`The personal website of Jimmy Boinembalome. ${frontmatter.mainpitch.description}`} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:title" content="Blouppy" />
            <meta property="og:description" content={`The personal website of Jimmy Boinembalome. ${frontmatter.mainpitch.description}`} />
            <meta property="og:url" content="https://blouppy.com" />
            <meta property="og:site_name" content="https://blouppy.com" />
          </Helmet>
        }
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
          fluid(maxWidth: 750, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
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
