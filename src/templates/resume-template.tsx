import React from "react";
import { HTMLContent } from "../components/layout/Content";
import {
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../components/icons/svg/social/Icons";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { Tag } from "../components/tag";
import { UserCard } from "../components/card/UserCard";
import { SocialLink } from "../components/social-link";
import { ButtonLink } from "../components/button";

interface ResumePageTemplateProps {
  title: string;
  resumeimage: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  job: string;
  technicalSkills: string[];
  softSkills: string[];
  englishResumeJB: string;
  frenchResumeJB: string;
  content: string | TrustedHTML;
  twitterUrl: string;
  linkedinUrl: string;
  githubUrl: string;
}

interface SkillsProps {
  title: string;
  skills: string[];
  color: string;
  isRoundedFull: boolean;
}

const Skills = ({ title, skills, color, isRoundedFull }: SkillsProps) => {
  return (
    <>
      <h2>{title}</h2>
      <div className="not-prose">
        <ul className="not-unreset mt-2 pl-0 leading-8">
          {skills.map((skill) => (
            <li key={skill + `skill`} className="not-unreset inline-flex mr-2 my-2">
              <Tag text={skill} color={color} isRoundedFull={isRoundedFull} className="no-underline" />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export const ResumePageTemplate = ({
  title,
  resumeimage,
  job,
  technicalSkills,
  softSkills,
  englishResumeJB,
  frenchResumeJB,
  content,
  twitterUrl,
  linkedinUrl,
  githubUrl
}: ResumePageTemplateProps) => {

  const socials: SocialLink[] = [
    {
      name: "Twitter",
      link: twitterUrl,
      icon: <TwitterIcon className="w-5 h-5" />
    },
    {
      name: "LinkedIn",
      link: linkedinUrl,
      icon: <LinkedInIcon className="w-5 h-5" />
    },
    {
      name: "Github",
      link: githubUrl,
      icon: <GithubIcon className="w-5 h-5" />
    },
  ];

  return (
    <div className="max-w-prose mx-auto">
      <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0">
        <h1 className="block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          {title}
        </h1>
        <UserCard username="Jimmy Boinembalome" photo={resumeimage} altPhoto="resume image" job={job} socials={socials} socialsClassName="flex justify-center space-x-5" />
      </div>

      <HTMLContent className="unreset prose lg:prose-lg dark:prose-invert prose-indigo" content={content} />
      <div className="unreset prose lg:prose-lg dark:prose-invert prose-indigo">
        <h1>Skills</h1>
        <Skills title="Technical Skills" skills={technicalSkills} color="bg-violet-100 text-violet-800" isRoundedFull={true} />
        <Skills title="Soft Skills" skills={softSkills} color="bg-amber-100 text-amber-800" isRoundedFull={false} />

        <div className="unreset prose lg:prose-lg dark:prose-invert prose-indigo">
          <h1>Download</h1>
          <p>If you wish, you can download my resume: </p>
          <div className="mt-6 space-y-4 flex flex-col justify-between sm:space-y-0 sm:flex-row">
            <ButtonLink link={englishResumeJB} text="Download In English" className="not-unreset no-underline inline-flex " />
            <ButtonLink link={frenchResumeJB} text="Download In French" className="not-unreset no-underline inline-flex " />
          </div>
        </div>
      </div>
    </div>
  );
};
