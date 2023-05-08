import { useStaticQuery, graphql } from "gatsby";
import { ThreeLastBlogsQuery } from "../types/graphql-queries";

export const useThreeLastBlogs = () => {
    const query: ThreeLastBlogsQuery = useStaticQuery(graphql`
        query ThreeLastBlogs {
          allMarkdownRemark(
            sort: { frontmatter: { date: DESC } }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
            limit: 3
          ) {
            edges {
              node {
                timeToRead
                excerpt(pruneLength: 200)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  category
                  categorycolor
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(layout: FULL_WIDTH)
                    }
                  }
                  author
                  authorimage {
                    childImageSharp {
                      gatsbyImageData(layout: FULL_WIDTH)
                    }
                  }
                }
              }
            }
          }
        }
      `
    )
    return query?.allMarkdownRemark?.edges;
};