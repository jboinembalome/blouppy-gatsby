import React from "react";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import {
  LinkedInIcon,
  TwitterIcon,
} from "../components/icons/svg/social/Icons";
import EnglishResumeJB from '../../static/downloads/CV_EN_Boinembalome_Jimmy.pdf'
import FrenchResumeJB from '../../static/downloads/CV_FR_Boinembalome_Jimmy.pdf'
import { IGatsbyImageData } from "gatsby-plugin-image";
import { Tag } from "../components/tag";

interface ResumePageTemplateProps {
  title: string;
  subtitle: string;
  resumeimage: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  content: string | TrustedHTML;
  contentComponent: typeof HTMLContent;
}

export const ResumePageTemplate = ({
  title,
  subtitle,
  resumeimage,
  content,
  contentComponent,
}: ResumePageTemplateProps) => {
  const PageContent = contentComponent || Content;
  const skills = {
    specifics: [
      "C#",
      ".NET",
      ".NET Core",
      "Angular",
      "Angular Material",
      "TailwindCSS",
      "WPF",
      "WinForms",
      "Git/Github",
      "SQL",
      "Entity Framework Core",
    ],
    softs: [
      "Listening",
      "Curiosity",
      "Calmness",
      "Analysis",
      "Teamwork",
      "Open-mindedness",
    ],
  };
  return (
    <div className="max-w-prose mx-auto">
      <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0">
        <h1 className="block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          {title}
        </h1>
        <div className="py-8 px-6 bg-gray-800 text-center rounded-lg">
          <div className="space-y-6">
            <PreviewCompatibleImage
              className="mx-auto h-24 w-24 rounded-full relative z-0"
              imageInfo={{
                image: resumeimage,
                alt: `resume image`,
              }}
            />
            <div className="space-y-2">
              <div className="font-medium text-lg leading-6 space-y-1">
                <p className="text-white">Jimmy Boinembalome</p>
                <p className="text-violet-400 text-base">
                  .NET Design and Development Engineer
                </p>
              </div>

              <ul role="list" className="flex justify-center space-x-5">
                <li>
                  <a
                    href="https://twitter.com/JBoinembalome"
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">Twitter</span>
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://fr.linkedin.com/in/jimmy-boinembalome-87281a189"
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <LinkedInIcon className="w-5 h-5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <PageContent
        className="unreset prose lg:prose-lg dark:prose-invert prose-indigo"
        content={content}
      />
      <div className="unreset prose lg:prose-lg dark:prose-invert prose-indigo">
        <h1>Skills</h1>
        <h2>Technical Skills</h2>
        <div className="not-prose">
          <ul className="not-unreset mt-2 pl-0 leading-8">
            {skills.specifics.map((skill) => (
              <li key={skill + `skill`} className="not-unreset inline-flex mr-2 my-2">
                <Tag text={skill} color="bg-violet-100 text-violet-800" className="no-underline" />
              </li>
            ))}
          </ul>
        </div>

        <h2>Soft Skills</h2>
        <div className="not-prose">
          <ul className="not-unreset mt-2 pl-0 leading-8">
            {skills.softs.map((soft) => (
              <li key={soft + `soft`} className="not-unreset inline-flex mr-2 my-2">
                <Tag text={soft} color="bg-amber-100 text-amber-800" isRoundedFull={false} className="no-underline" />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 unreset prose lg:prose-lg dark:prose-invert prose-indigo">
          <h1>Download</h1>
          <p>If you wish, you can download my resume: </p>
          <div className="mt-6 space-y-4 flex flex-col justify-between sm:space-y-0 sm:flex-row">
            <a
              href={EnglishResumeJB}
              download
              className="not-unreset no-underline inline-flex items-center justify-center mr-2 px-4 py-2 text-base font-medium rounded-md shadow-sm text-white dark:text-gray-900 bg-violet-600 hover:bg-violet-700 dark:bg-violet-400 hover:dark:bg-violet-500"
            >
              Download In English
            </a>
            <a
              href={FrenchResumeJB}
              download
              className="not-unreset no-underline inline-flex items-center justify-center mr-2 px-4 py-2 text-base font-medium rounded-md shadow-sm text-white dark:text-gray-900 bg-violet-600 hover:bg-violet-700 dark:bg-violet-400 hover:dark:bg-violet-500"
            >
              Download In French
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
