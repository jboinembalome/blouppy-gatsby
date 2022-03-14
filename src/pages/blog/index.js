import React from 'react'

import Layout from '../../components/Layout'
import BlogRollHorizontal from '../../components/BlogRollHorizontal'
import { Helmet } from 'react-helmet'

export default class BlogIndexPage extends React.Component {
  render() {
    function HeaderCard() {
      return <div className="bg-violet-700 dark:bg-violet-500 rounded-lg shadow-xl overflow-hidden">
        <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div className="lg:self-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Latest Articles</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-violet-200">
              Every Wednesday an article is added 😉
            </p>
            {/* <a
            href="#"
            className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-violet-600 dark:text-violet-400 hover:bg-violet-50"
          >
            Subscribe to newsletter
          </a> */}
          </div>
        </div>
      </div>
    }

    return (
      <Layout>
        <Helmet title={`Blouppy | Blog`} />
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <HeaderCard />
          <section className="mt-8">
            <BlogRollHorizontal />
          </section>
        </div>
      </Layout>
    )
  }
}
