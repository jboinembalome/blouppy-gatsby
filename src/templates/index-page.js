import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { IndexPageTemplate } from './index-page-template'
import { Seo } from "../components/Seo"

const IndexPage = ({
  data: {
    markdownRemark: { frontmatter },
  } }) => {

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

export const Head = ({
  data: {
    markdownRemark: { frontmatter },
  } }) => {
  const description = `The personal website of Jimmy Boinembalome. ${frontmatter.mainpitch.description}`;

  return (
    <Seo description={description} />);
};

export default IndexPage

export const pageQuery = graphql`query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
    frontmatter {
      title
      image {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
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
