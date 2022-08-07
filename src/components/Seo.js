/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from './useSiteMetadata';

export const Seo = ({ description, title, url, children }) => {
  const siteMetadata = useSiteMetadata();
  const metaDescription = description || siteMetadata?.description || ``;
  const metaUrl = url || siteMetadata?.siteUrl || ``;
  const siteName = siteMetadata?.title;

  return (
    <Helmet title={title && siteName ? `${title} | ${siteName}` : siteName}>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:creator" content={siteMetadata?.social?.twitter || ``} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={siteMetadata?.author?.name || ``} />
      <meta name="twitter:description" content={siteMetadata?.author?.summary || ``} />
      <meta name="theme-color" content="#fff" />
      {children}
    </Helmet>
  );
};