import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import Content from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { GithubIcon } from '../components/shared/svg/social/Icons'

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
  link
}) => {
  const PostContent = contentComponent || Content

  return (

    <section>
      <div className="relative py-8 overflow-hidden">
        <div className="relative flex flex-col px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <PreviewCompatibleImage className="h-10 w-10 rounded-full relative z-0"
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
                  <GithubIcon className="h-10 w-10"/>
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
                    <PreviewCompatibleImage className="relative z-0"
                      imageInfo={{
                        image: featuredimage,
                        alt: `featured image thumbnail for post ${title}`,
                      }}
                    />
                  ) : <div className="h-64 w-64" />}
                </div>
              </div>
            </div>
            <PostContent className="unreset prose lg:prose-lg dark:prose-invert prose-indigo" content={content} />
            {tags && tags.length ? (
              <div className="mt-6 prose lg:prose-lg dark:prose-invert prose-indigo">
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
  readingTime: PropTypes.string
}