import React from 'react'
import Content from '../components/Content'
import { CameraIcon } from '@heroicons/react/24/solid'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { HTMLContent } from '../components/Content'

interface AboutPageTemplateProps {
  title: string;
  aboutimage: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  content: string | TrustedHTML;
  contentComponent: typeof HTMLContent;
}

export const AboutPageTemplate = ({ title, aboutimage, content, contentComponent }: AboutPageTemplateProps) => {
  const PageContent = contentComponent || Content

  return (
    <div className="overflow-hidden">
      <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
        <div>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            {title}
          </h3>
        </div>
      </div>
      <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="relative lg:row-start-1 lg:col-start-2">
          <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
            <figure>
              <div>
                <PreviewCompatibleImage className="rounded-lg shadow-lg object-cover object-center aspect-w-12 aspect-h-7 lg:aspect-none lg:relative z-0"
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
  )
}