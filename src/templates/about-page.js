import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { AboutPageTemplate } from './about-page-template'
import { HTMLContent } from '../components/Content'
import { Seo } from "../components/Seo"
import { getSrc } from "gatsby-plugin-image"

const AboutPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <Head siteMetadata={data.site.siteMetadata} frontmatter={frontmatter}/>
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

const Head = ({ siteMetadata, frontmatter }) => {
  const description = "About Jimmy Boinembalome";

  return (
    <Seo title={frontmatter.title} description={description} url={`${siteMetadata.siteUrl}/about`}>
      <meta name="image" content={`${siteMetadata.siteUrl}${getSrc(frontmatter.aboutimage)}`} />
      <meta property="og:image:alt" content={siteMetadata.author.name} />
      <meta property="og:image" content={`${siteMetadata.siteUrl}${getSrc(frontmatter.aboutimage)}`} />
    </Seo>);
};

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
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
        aboutimage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
