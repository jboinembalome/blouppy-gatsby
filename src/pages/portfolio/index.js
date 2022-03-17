import React from 'react'

import Layout from '../../components/Layout'
import PortfolioRollHorizontal from '../../components/PortfolioRollHorizontal'
import { Helmet } from 'react-helmet'

export default class PortfolioIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Blouppy | Portfolio`} />
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="bg-rose-300 dark:bg-indigo-400 rounded-lg shadow-xl overflow-hidden">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Portfolio</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-900">
                  Some projects I am happy to share with you 👍
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
          <section className="mt-8">
            <PortfolioRollHorizontal />
          </section>
        </div>
      </Layout>
    )
  }
}
