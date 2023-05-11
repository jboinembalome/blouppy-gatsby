import React from "react";
import { ThreeLastBlogs } from "../components/blog/ThreeLastBlogs";
import PreviewCompatibleImage from "../components/preview-compatible-image/PreviewCompatibleImage";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { SmoothTransition } from "../components/smooth-transition";
import { ButtonInternalLink } from "../components/button";

interface WelcomeProps {
  title: string;
  image: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  subheading: string;
}

const Welcome = ({ image, title, subheading }: WelcomeProps) => {
  const imageInfo = { image: image, alt: "" };

  return (
    <div className="flex flex-col self-center md:self-auto md:flex-row gap-4 md:justify-between">
      <SmoothTransition className="flex flex-col gap-4 text-center md:text-start md:self-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <h2 className="text-base text-primary-500 dark:text-primary-300 sm:text-lg sm:max-w-xl md:text-xl">
          {subheading}
        </h2>
      </SmoothTransition>
      <PreviewCompatibleImage
        className="w-full max-w-md relative z-0"
        imageInfo={imageInfo}
        loading="eager"
      />
    </div>
  )
};

interface IntroducingProps {
  mainpitch: {
    title: string;
    description: string;
  };
}

const Introducing = ({ mainpitch }: IntroducingProps) => {
  return (
    <SmoothTransition className="flex flex-col gap-4">
      <h1 className="text-base text-center text-primary-500 dark:text-primary-300 font-semibold tracking-wide uppercase">Introducing</h1>
      <span className="text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
        {mainpitch.title}
      </span>
      <p className="text-xl text-gray-500 dark:text-gray-400 leading-8">
        {mainpitch.description}
      </p>
    </SmoothTransition>
  )
};

const StayUpToDate = () => {
  return (
    <SmoothTransition className="flex flex-col gap-4">
      <h1 className="text-base text-center text-primary-500 dark:text-primary-300 font-semibold tracking-wide uppercase">Stay up to date</h1>
      <span className="text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
        Latest Articles
      </span>
      <ThreeLastBlogs />
      <ButtonInternalLink link="/blog" text="Read More Articles" className="mx-auto" />
    </SmoothTransition>
  )
};

interface IndexPageTemplateProps extends WelcomeProps, IntroducingProps{
  heading: string;
}

export const IndexPageTemplate = ({ image, title, subheading, mainpitch }: IndexPageTemplateProps) => {
  return (
    <section className="flex flex-col gap-12 justify-center">
      <Welcome image={image} title={title} subheading={subheading} />
      <Introducing mainpitch={mainpitch} />
      <StayUpToDate />
    </section>
  )
};
