const React = require("react");

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
    <script key="bmc-widget-script"
      data-name="BMC-Widget"
      data-cfasync="false"
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      data-id="blouppy"
      data-description="Support me on Buy me a coffee!"
      data-message=""
      data-color="#BD5FFF"
      data-position="Right"
      data-x_margin="18"
      data-y_margin="18"></script>,
  ]);
};