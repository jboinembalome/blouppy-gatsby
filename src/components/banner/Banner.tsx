import React from 'react';

export interface BannerProps {
    title?: string;
    subtitle?: string;
    className?: string;
}

export const Banner = ({ title, subtitle, className }: BannerProps) => {
    return (
        <div className={className}>
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                <span className="block">{title}</span>
              </h2>
              <p className="mt-4 text-lg leading-6">
                {subtitle}
              </p>
              {/* <a
            href="#"
            className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-primary-500 dark:text-primary-300 hover:bg-primary-50"
          >
            Subscribe to newsletter
          </a> */}
            </div>
          </div>
        </div>
    );
};
