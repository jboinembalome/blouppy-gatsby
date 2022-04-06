const React = require("react")

exports.replaceRenderer = ({ replaceBodyHTMLString }) => {
  replaceBodyHTMLString('<div id="___gatsby"></div>');
};

exports.onRenderBody = ({ setPostBodyComponents }) => {
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