import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import ArticleInformation from './ArticleInformation'

class BlogRollHorizontal extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    function CardImage(props) {
      const { post } = props
      return <Link to={post.fields.slug}>
        <div className="relative h-full pt-24 sm:48 md:pt-64 pb-10 rounded-2xl overflow-hidden">
          {post.frontmatter.featuredimage ? (
            <PreviewCompatibleImage className="absolute inset-0 h-full w-full object-cover"
              imageInfo={{
                image: post.frontmatter.featuredimage,
                alt: `featured image thumbnail for post ${post.frontmatter.title}`,
              }}
            />
          ) : <div className="w-64" />}
        </div>
      </Link>;
    }

    function CardContent(props) {
      const { post } = props
      return <div className="flex-1 bg-white dark:bg-gray-800 pt-6 pr-6 flex flex-col justify-between">
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
          readingTime={post.fields.readingTime.text} />
      </div>;
    }

    return (
      <div className="mx-auto">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="relative bg-white dark:bg-gray-900 py-4" key={post.id}>
              <div className="border border-transparent rounded-2xl bg-white dark:bg-gray-800 shadow md:mx-auto md:max-w-7xl md:grid md:grid-cols-2 md:gap-24 md:items-start">
                <div className="relative h-full">
                  <CardImage post={post} />
                </div>

                <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 md:px-0">
                  {/* Content area */}
                  <CardContent post={post} />
                </div>
              </div>
            </div>
          ))}
      </div>
    )
  }
}

BlogRollHorizontal.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`query BlogRollHorizontalQuery {
  allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]}
    filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
  ) {
    edges {
      node {
        excerpt(pruneLength: 200)
        id
        fields {
          slug
          readingTime {
            text
          }
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
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          author
          authorimage {
            childImageSharp {
              gatsbyImageData(width: 450, quality: 100, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
}
`}
    render={(data, count) => <BlogRollHorizontal data={data} count={count} />}
  />
)
