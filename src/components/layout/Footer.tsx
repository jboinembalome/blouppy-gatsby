import React from "react";
import {
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../icons/svg/social/Icons";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";
import { withPrefix } from "gatsby";

export const Footer = () => {
  const siteMetadata = useSiteMetadata();
  

  const navigation = {
    social: [
      {
        name: "LinkedIn",
        href: siteMetadata?.social?.linkedinUrl,
        icon: (props: React.SVGProps<SVGSVGElement>) => (
          <LinkedInIcon {...props} />
        ),
      },
      {
        name: "Twitter",
        href: siteMetadata?.social?.twitterUrl,
        icon: (props: React.SVGProps<SVGSVGElement>) => (
          <TwitterIcon {...props} />
        ),
      },
      {
        name: "GitHub",
        href: siteMetadata?.social?.githubUrl,
        icon: (props: React.SVGProps<SVGSVGElement>) => (
          <GithubIcon {...props} />
        ),
      },
    ],
  };

  


  return (
    <footer className="backdrop-blur flex-none transition-colors bg-white/75 dark:bg-gray-950/75 shadow" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img
              className="h-10 w-10"
              src={`${withPrefix("/")}img/logo.png`}
              alt="Blouppy"
            />
            <p className="text-gray-500 dark:text-gray-300 text-base">
              Making the world a better place by sharing information for all.
            </p>
          </div>
        </div>
        <div className="mt-8 flex space-x-6 md:order-2">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        {/* <div className="border-t border-gray-700 mt-12 pt-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 tracking-wider uppercase">
              Subscribe to the newsletter
            </h3>
            <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
              The latest articles, sent to your inbox weekly.
            </p>
          </div>
          <form className="mt-4 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full bg-primary-500 dark:bg-primary-300 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-primary-500 dark:hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div> */}
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-base text-gray-600 dark:text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Blouppy, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};