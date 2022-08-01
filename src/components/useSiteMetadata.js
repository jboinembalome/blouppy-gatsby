import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author {
              name
              summary
            }
            description
            siteUrl
            canonicalUrl
            social {
              twitter
            }
          }
        }
      }
    `
  )
  return site.siteMetadata;
};