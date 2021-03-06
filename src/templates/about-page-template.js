import React from 'react'
import PropTypes from 'prop-types'
import Content from '../components/Content'
import { CameraIcon } from '@heroicons/react/solid'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const AboutPageTemplate = ({ title, aboutimage, content, contentComponent, helmet }) => {
  const PageContent = contentComponent || Content

  return (
    <div className="overflow-hidden">
      {helmet || ''}
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              {title}
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div>
                  <PreviewCompatibleImage className="rounded-lg shadow-lg object-cover object-center aspect-w-12 aspect-h-7 lg:aspect-none"
                    imageInfo={{
                      image: aboutimage,
                      alt: `about image`,
                    }}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500 dark:text-gray-400">
                  <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-2">Photo by <a href="https://www.instagram.com/zenasiart/?hl=fr" target="_blank" className="underline hover:text-gray-600 dark:hover:text-gray-500">Asia Zeni</a></span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 max-w-prose mx-auto lg:max-w-none">
            <PageContent className="unreset prose lg:prose-lg dark:prose-invert prose-indigo" content={content} />
          </div>
        </div>
      </div>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  aboutimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  helmet: PropTypes.object,
}