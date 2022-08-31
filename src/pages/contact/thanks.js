import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'gatsby'
import { Seo } from "../../components/Seo"
import { useSiteMetadata } from "../../components/useSiteMetadata"

const Thanks = () => (
  <Layout>
    <Head />
    <section className="min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="max-w-max mx-auto">
        <main className="sm:flex">
          <p className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 sm:text-5xl">🙏🏼</p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight sm:text-5xl">Thank you for contacting me!</h1>
              <p className="mt-1 text-base text-gray-500"> I will answer you as soon as possible by e-mail. 😉</p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link className="btn btn-outline-primary inline-flex items-center" to="/">
                Go back home
              </Link>

              <Link className="btn btn-outline-primary inline-flex items-center" to="/contact">
                Contact Me Again
              </Link>
            </div>
          </div>
        </main>
      </div>
    </section>
  </Layout>
)

const Head = () => {
  const { siteUrl } = useSiteMetadata();
  const description = "Thank you page"
  return <Seo title="Thanks" description={description} url={`${siteUrl}/contact/thanks`} />
};

export default Thanks;