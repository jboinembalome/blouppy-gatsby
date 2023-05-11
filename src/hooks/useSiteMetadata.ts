import { graphql, useStaticQuery } from 'gatsby'
import { SiteMetadataQuery } from '../types/graphql-queries';

export const useSiteMetadata = () => {
  const { site }: SiteMetadataQuery = useStaticQuery(
    graphql`
      query SiteMetadata {
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
              twitterUrl
              linkedinUrl
              githubUrl
            }
          }
        }
      }
    `
  )
  return site.siteMetadata;
};