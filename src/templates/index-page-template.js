import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import BlogRoll from '../components/BlogRoll'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { getSrc } from "gatsby-plugin-image"

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  mainpitch,
}) => (
  <div>
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">{title}</span>
              </h1>
              <h3 className="mt-3 text-base text-violet-600 dark:text-violet-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {subheading}
              </h3>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="flex justify-center mt-2 lg:absolute lg:inset-y-0 lg:right-0 lg:mr-6">
        <PreviewCompatibleImage className="h-full w-2/3 object-cover lg:w-full lg:h-full"
          imageInfo={{
            image: !!image.childImageSharp ? getSrc(image.childImageSharp.gatsbyImageData) : image,
            alt: "",
          }}
        />
      </div>
    </div>
    <section className="flex justify-center pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="container">
        <div className="flex-row">
          <div className="flex-col space-y-8">
            <div className="text-lg mx-auto">
              <h1>
                <span className="block text-base text-center text-violet-600 dark:text-violet-400 font-semibold tracking-wide uppercase">
                  Introducing
                </span>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                  {mainpitch.title}
                </span>
              </h1>
              <p className="mt-8 text-xl text-gray-500 dark:text-gray-400 leading-8">
                {mainpitch.description}
              </p>
            </div>

            <div className="flex-col ">
              <div className="mb-8 text-lg mx-auto">
                <h1>
                  <span className="block text-base text-center text-violet-600 dark:text-violet-400 font-semibold tracking-wide uppercase">
                    Stay up to date
                  </span>
                  <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                    Latest Articles
                  </span>
                </h1>
              </div>
              <BlogRoll />
              <div className="flex-col  text-center mt-5">
                <Link className="btn btn-outline-primary" to="/blog">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
}