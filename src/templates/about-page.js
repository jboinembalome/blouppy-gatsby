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
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.title}
        aboutimage={frontmatter.aboutimage}
        content={html}
        helmet={
          <Helmet titleTemplate="%s | About">
            <meta name="description" content="About Jimmy Boinembalome" />
            <meta name="image" content={`https://blouppy.com${frontmatter.aboutimage.childImageSharp.fluid.src}`} />
            <meta property="og:image:alt" content={`${frontmatter.title}`} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:image" content={`https://blouppy.com${frontmatter.aboutimage.childImageSharp.fluid.src}`} />) 
            <meta property="og:title" content={`${frontmatter.title}`} />
            <meta property="og:description" content="About Jimmy Boinembalome" />
            <meta property="og:url" content="https://blouppy.com/about" />
            <meta property="og:site_name" content="https://blouppy.com" />
          </Helmet>
        }
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
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
