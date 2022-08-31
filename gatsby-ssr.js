const React = require("react")

exports.replaceRenderer = ({ replaceBodyHTMLString }) => {
  replaceBodyHTMLString('<div id="___gatsby"></div>');
};

exports.onRenderBody = ({ /* setHeadComponents ,*/ setPostBodyComponents }) => {
  /* setHeadComponents([
    <script key="google-ads"
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7159241060953293"
      crossOrigin="anonymous" />,
  ]); */

  setPostBodyComponents([
    <script key="theme-initialize"
      dangerouslySetInnerHTML={{
        __html: `
        try {
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        } catch (_) {}
      `,
      }}
    />,
  ]);
};