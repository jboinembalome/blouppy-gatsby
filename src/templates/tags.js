import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { kebabCase } from 'lodash'
import { Seo } from '../components/Seo'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map((post) => (
      <li key={post.node.fields.slug} className="px-4 py-4 sm:px-0">
        <Link to={post.node.fields.slug}>
          <h2 className="is-size-2 text-2xl leading-9 font-medium text-gray-900 dark:text-gray-100 hover:text-violet-600 dark:hover:text-violet-400">{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ))
    const tag = this.props.pageContext.tag
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'
      } tagged with`

    return (
      <Layout>
        <Head tag={tag} siteMetadata={this.props.data.site.siteMetadata}/>
        <section>
          <div className="overflow-hidden">
            <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="text-gray-500 dark:text-gray-400 mx-auto">
                  <div className="text-lg max-w-prose mx-auto">

                    <h1 className="block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                      {tagHeader} <span className='text-violet-600 dark:text-violet-400'>{tag}</span>
                    </h1>
                    <ul className="mt-8 divide-y divide-gray-200">{postLinks}</ul>

                    <Link className="mt-2 btn btn-outline-primary" to="/tags/">
                      Browse all tags
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

const Head = ({ tag, siteMetadata }) => {
  const description = `Article(s) tagged with ${tag}`;
  const url = `${siteMetadata.siteUrl}/tags/${kebabCase(tag)}`;

  return <Seo title={tag} description={description} url={url} />
};

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
