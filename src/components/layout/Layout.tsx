import React from "react";
import { Helmet } from "react-helmet";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { withPrefix } from "gatsby";
import "../../styles/site.scss";

interface LayoutProps {
  children: JSX.Element |  JSX.Element[];
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="dark:bg-gray-900">
      <Helmet>
        <html lang="en" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />

        <link rel="shortcut icon" href={`${withPrefix("/")}img/favicon.ico`} />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#5bbad5"
        />
        <body />
      </Helmet>
      <Navbar />
        <div className="relative max-w-7xl mx-auto p-8">{children}</div>
      <Footer />
    </div>
  );
};