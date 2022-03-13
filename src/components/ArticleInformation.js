import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

export default class ArticleInformation extends React.Component {
  render() {
    const { author, authorimage, date, readingTime } = this.props
    return (
      <div className="mt-6 pb-6 flex items-center">
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
    )
  }
}

ArticleInformation.propTypes = {
  author: PropTypes.string,
  authorimage: PropTypes.object,
  date: PropTypes.string,
  readingTime: PropTypes.string
}