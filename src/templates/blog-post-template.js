import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import Content from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { Disqus } from 'gatsby-plugin-disqus'
import { CameraIcon } from '@heroicons/react/solid'
//import GoogleAdSense from '../components/GoogleAdSense'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  date,
  author,
  authorimage,
  description,
  tags,
  title,
  featuredauthor,
  featuredlink,
  featuredimage,
  slug,
  readingTime
}) => {
  const PostContent = contentComponent || Content
  const siteUrl = 'https://blouppy.com' + slug
  const disqusConfig = {
    url: siteUrl,
    identifier: slug,
    title: title,
  }

  return (

    <section>
      <div className="relative py-8 overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div>
        <div className="relative flex flex-col px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <PreviewCompatibleImage className="h-10 w-10 rounded-full"
                  imageInfo={{
                    image: authorimage,
                    alt: `featured image thumbnail for post ${author}`,
                  }}
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {author}
                </p>
                <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
                  <time dateTime={date}>{date}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{readingTime}</span>
                </div>
              </div>
            </div>
            <h1 className="mt-6 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              {title}
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-gray-500 dark:text-gray-400 leading-8">
              {description}
            </p>
            <div className="mt-6 rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 rounded-lg shadow-lg">
                <div className="relative">
                  {featuredimage ? (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: featuredimage,
                        alt: `featured image thumbnail for post ${title}`,
                      }}
                    />
                  ) : <div className="h-64 w-64" />}
                </div>
              </div>
            </div>
            <figcaption className="mt-3 flex text-sm text-gray-500 dark:text-gray-400">
              <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
              <span className="ml-2">Photo by <a href={featuredlink} target="_blank" className="underline hover:text-gray-600 dark:hover:text-gray-500">{featuredauthor}</a> on <a href="https://unsplash.com/" target="_blank" className="underline hover:text-gray-600 dark:hover:text-gray-500">Unsplash</a></span>
            </figcaption>
            <PostContent className="unreset prose lg:prose-lg dark:prose-invert prose-indigo" content={content} />
            {tags && tags.length ? (
              <div className="mt-6 prose lg:prose-lg dark:prose-invert prose-indigo">
                <h4>Tags</h4>
                <div className="not-prose">
                  <ul role="list" className="not-prose mt-2 pl-0 leading-8">
                    {tags.map((tag) => (
                      <li key={tag + `tag`} className="not-prose inline pl-0 pr-2">
                        <Link to={`/tags/${kebabCase(tag)}/`} className="no-underline inline-flex items-center px-3 py-0.5 rounded-full text-base font-medium bg-violet-100 text-violet-800">
                          <span>
                            {tag}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
           {/*  <GoogleAdSense
              className="block mt-8"
              client='ca-pub-7159241060953293'
              slot='6674263874'
              format='auto'
              responsive='true'
            /> */}
            <div className="bg-gray-900 dark:bg-gray-800 px-4 pt-2 rounded-md mt-8 prose lg:prose-lg dark:prose-invert prose-indigo">
              <Disqus config={disqusConfig} />
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  authorimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  featuredauthor: PropTypes.string,
  featuredlink: PropTypes.string,
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  slug: PropTypes.string,
  readingTime: PropTypes.string
}