import React from 'react';
import { Layout } from '../components/layout';
import { Link } from 'gatsby';
import { ButtonInternalLink } from '../components/button';

const NotFoundPage = () => (
  <Layout>
    <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col">
      <div className="flex-shrink-0 my-auto py-16 sm:py-32">
        <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">404 error</p>
        <h1 className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight sm:text-5xl">Page not found</h1>
        <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-6">
          <ButtonInternalLink link="/" text="Go back home" />
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
