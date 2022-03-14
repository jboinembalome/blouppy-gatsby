import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import ArticleInformation from './ArticleInformation'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    function CardImage(props) {
      const { post } = props
      return <Link className="flex-shrink-0" to={post.fields.slug}>
        <div className="relative">
          {post.frontmatter.featuredimage ? (
            <PreviewCompatibleImage
              imageInfo={{
                image: post.frontmatter.featuredimage,
                alt: `featured image thumbnail for post ${post.frontmatter.title}`,
              }}
            />
          ) : <div className="h-64 w-64" />}
        </div>
      </Link>;
    }

    function CardContent(props) {
      const { post } = props
      return <div className="flex-1 dark:bg-gray-800 p-6 flex flex-col justify-between">
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
      <div className="max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden" key={post.id}>
              <CardImage post={post}/>
              <CardContent post={post}/>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`query BlogRollQuery {
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
