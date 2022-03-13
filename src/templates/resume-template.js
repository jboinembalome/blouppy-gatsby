import React from 'react'
import PropTypes from 'prop-types'
import Content from '../components/Content'
import { Helmet } from 'react-helmet'

export const ResumePageTemplate = ({ title, subtitle, content, contentComponent }) => {
  const PageContent = contentComponent || Content
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
      "Entity Framework Core"
    ],
    softs: [
      "Listening",
      "Curiosity",
      "Calmness",
      "Analysis",
      "Teamwork",
      "Open-mindedness",
    ]
  }
  return (
    <div className="overflow-hidden">
       <Helmet title={`Blouppy | Resume`} />
       <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
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
          <div className="text-gray-500 dark:text-gray-400 mx-auto">
            <div className="text-lg max-w-prose mx-auto">

              <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0">
                <h1 className="block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                  {title}
                </h1>
                <div className="py-8 px-6 bg-gray-800 text-center rounded-lg">
                  <div className="space-y-6">
                    <img className="mx-auto h-24 w-24 rounded-full" src="img/jimmy.jpg" alt="" />
                    <div className="space-y-2">
                      <div className="font-medium text-lg leading-6 space-y-1">
                        <h3 className="text-white">Jimmy Boinembalome</h3>
                        <p className="text-violet-400 text-base">.NET Design and Development Engineer</p>
                      </div>

                      <ul role="list" className="flex justify-center space-x-5">
                        <li>
                          <a href="https://twitter.com/JBoinembalome" className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="https://fr.linkedin.com/in/jimmy-boinembalome-87281a189" className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
            <PageContent className="unreset prose dark:prose-invert prose-indigo md:prose-lg" content={content} />
          </div>
          <div className="unreset prose dark:prose-invert prose-indigo md:prose-lg text-gray-500 dark:text-gray-400 mx-auto">
            <h1>Skills</h1>
            <h2>Technical Skills</h2>
            <ul className=" mt-2 pl-0 leading-8">
              {skills.specifics.map((skill) => (
                <li key={skill + `skill`} className="no-underline inline-flex items-center mr-2 px-3 py-0.5 rounded-full text-base font-medium bg-violet-100 text-violet-800">
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
            <h2>Soft Skills</h2>
            <ul className=" mt-2 pl-0 leading-8">
              {skills.softs.map((soft) => (
                <li key={soft + `soft`} className="no-underline inline-flex items-center mr-2 px-3 py-0.5 rounded-md text-base font-medium bg-amber-100 text-amber-800">
                  <span>{soft}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

ResumePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}