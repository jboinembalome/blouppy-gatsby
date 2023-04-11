import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import ArticleInformation from './ArticleInformation'

class PortfolioRollHorizontal extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    function CardImage(props) {
      const { post } = props
      return <Link className="relative h-full" to={post.fields.slug}>
        <div className="relative h-full rounded-lg overflow-hidden">
          {post.frontmatter.featuredimage ? (
            <PreviewCompatibleImage className="absolute inset-0 h-full w-full object-cover z-0"
              imageInfo={{
                image: post.frontmatter.featuredimage,
                alt: `project image thumbnail for post ${post.frontmatter.title}`,
              }}
            />
          ) : <div className="w-64" />}
        </div>
      </Link>;
    }

    function CardContent(props) {
      const { post } = props
      const readingTime = `${post.timeToRead} min read`

      return <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 md:px-0">
        <div className="flex-1 pt-6 pr-6 flex flex-col justify-between">
          <div className="flex-1">
            <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${post.frontmatter.categorycolor}`}>
              {post.frontmatter.category}
            </span>
            <div className="block mt-2">
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">{post.frontmatter.title}</p>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400">{post.excerpt}</p>
            </div>
            <div className="flex justify-end">
              <Link className="btn-white-sm mt-6" to={post.fields.slug}>
                Continue Reading
              </Link>
            </div>
          </div>
          <ArticleInformation
            author={post.frontmatter.author}
            authorimage={post.frontmatter.authorimage}
            date={post.frontmatter.date}
            readingTime={readingTime}
            link={post.frontmatter.link} />
        </div>
      </div>
        ;
    }

    return (
      <div className="mx-auto">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="relative bg-white dark:bg-gray-900 py-4" key={post.id}>
              <div className="rounded-2xl bg-white dark:bg-gray-800 shadow md:mx-auto md:max-w-7xl md:grid md:grid-cols-2 md:gap-24 md:items-start">
                <CardImage post={post} />
                <CardContent post={post} />
              </div>
            </div>
          ))}
      </div>
    )
  }
}

PortfolioRollHorizontal.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query PortfolioRollHorizontalQuery {
        allMarkdownRemark(
          sort: {frontmatter: {date: DESC}}
          filter: {frontmatter: {templateKey: {eq: "portfolio-post"}}}
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
                link
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PortfolioRollHorizontal data={data} count={count} />}
  />
)
