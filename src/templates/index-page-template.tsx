import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import BlogRoll from "../components/BlogRoll";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { Transition } from "@headlessui/react";
import { IGatsbyImageData } from "gatsby-plugin-image";


interface IndexPageTemplateProps {
  title: string;
  image: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  heading: string;
  subheading: string;
  mainpitch: {
    title: string;
    description: string;
  };
}

export const IndexPageTemplate = ({ image, title, subheading, mainpitch }: IndexPageTemplateProps) => (
  <div>
    <section className="flex max-w-7xl mx-auto justify-center pt-10 pb-20 px-4 sm:px-6 lg:pt-14 lg:pb-28 lg:px-8">
      <div className="container">
        <div className="flex-row mb-20">
          <div className="lg:pb-14 lg:overflow-hidden">
            <div className="max-w-7xl">
              <div className="lg:grid lg:grid-cols-2 lg:gap-32">
                <div className="mx-auto max-w-md sm:max-w-2xl sm:text-center lg:text-left lg:flex lg:items-center">
                  <Transition
                    show={true}
                    appear={true}
                    enter="transition-all duration-1000"
                    enterFrom="translate-y-24 opacity-0"
                    enterTo="translate-y-0 opacity-100"
                  >
                    <div className="mx-auto max-w-md text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">{title}</span>
                      </h1>
                      <h2 className="mt-3 text-base text-violet-600 dark:text-violet-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        {subheading}
                      </h2>
                    </div>
                  </Transition>
                </div>
                <div className="relative">
                  <div className="mt-12 mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:max-w-md">
                    <PreviewCompatibleImage
                      className="w-full relative z-0"
                      imageInfo={{
                        image: image,
                        alt: "",
                      }}
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-row">
          <div className="flex-col space-y-8">
            <Transition
              show={true}
              appear={true}
              enter="transition-all duration-1000"
              enterFrom="translate-y-24 opacity-0"
              enterTo="translate-y-0 opacity-100"
            >
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
            </Transition>

            <div className="flex-col ">
              <Transition
                show={true}
                appear={true}
                enter="transition-all duration-1000"
                enterFrom="translate-y-24 opacity-0"
                enterTo="translate-y-0 opacity-100"
              >
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
              </Transition>

              <BlogRoll />
              <div className="flex-col  text-center mt-5">
                <Link className="btn btn-outline-primary" to="/blog">
                  Read More Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
};
