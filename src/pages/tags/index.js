import React from 'react'
import { kebabCase } from 'lodash'
import { Seo } from "../../components/Seo"
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const Tag = ({ tag }) => (
  <li key={tag.fieldValue}>
    <span className="relative z-0 inline-flex shadow-sm rounded-md">
      <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}
        className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white dark:bg-gray-900 text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-violet-500">
        {tag.fieldValue}
      </Link>
      <span
        className="-ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white dark:bg-gray-900 text-sm font-medium text-gray-700 dark:text-gray-400"
      >
        {tag.totalCount}
      </span>
    </span>

  </li>
)
const TagsPage = ({ data }) => { 
  const { allMarkdownRemark: { group }} = data;

  return (
  <Layout>
    <Head siteMetadata={data.site.siteMetadata}/>
    <section>
      <div className="overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-gray-500 dark:text-gray-400 mx-auto">
              <div className="text-lg max-w-prose mx-auto">

                <h1 className="block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                  Tags
                </h1>

                <ul className="mt-8 flex flex-wrap gap-2">
                  {group.map((tag) => (
                    <Tag key={tag.fieldValue} tag={tag} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </Layout>
)}

const Head = ({ siteMetadata }) => <Seo title="Tags" description="List of tags for all articles." url={`${siteMetadata.siteUrl}/tags`} />;

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: {frontmatter: {tags: SELECT}}) {
        fieldValue
        totalCount
      }
    }
  }
`
