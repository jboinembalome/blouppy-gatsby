import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import Content from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const PortfolioPostTemplate = ({
  content,
  contentComponent,
  date,
  author,
  authorimage,
  description,
  tags,
  title,
  featuredimage,
  readingTime,
  helmet,
  link
}) => {
  const PostContent = contentComponent || Content

  return (

    <section>
      {helmet || ''}
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
            <div className="flex items-center justify-between">
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
              {link &&
                <a href={link} target="_blank" className="text-gray-500 hover:text-gray-700">
                  <span className="sr-only">Project Link</span>
                  <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>}
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
            <PostContent className="unreset prose dark:prose-invert prose-indigo md:prose-lg lg:prose-xl" content={content} />
            {tags && tags.length ? (
              <div className="mt-6 prose dark:prose-invert prose-indigo md:prose-lg lg:prose-xl">
                <h4>Tags</h4>
                <ul role="list" className="mt-2 pl-0 leading-8">
                  {tags.map((tag) => (
                    <li key={tag + `tag`} className="inline pl-0 pr-2">
                      <Link to={`/tags/${kebabCase(tag)}/`} className="no-underline inline-flex items-center px-3 py-0.5 rounded-full text-base font-medium bg-violet-100 text-violet-800">
                        <span>
                          {tag}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

PortfolioPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  authorimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  readingTime: PropTypes.string,
  helmet: PropTypes.object,
}