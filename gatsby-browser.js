const React = require("react")

const addBuyMeACoffee = () => {
  const script = document.createElement("script");

  script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
  script.async = true;
  script.setAttribute("data-name", "BMC-Widget");
  script.setAttribute("data-cfasync", "false");
  script.setAttribute("data-id", "blouppy");
  script.setAttribute("data-description", "Support me on Buy me a coffee!");
  script.setAttribute("data-message", "");
  script.setAttribute("data-color", "#BD5FFF");
  script.setAttribute("data-position", "Right");
  script.setAttribute("data-x_margin", "18");
  script.setAttribute("data-y_margin", "18");
  script.onload = function () {
    const evt = new Event("DOMContentLoaded", { "bubbles": false, "cancelable": false });
    window.dispatchEvent(evt);
  };

  document.body.appendChild(script);
}

require("prismjs/plugins/line-numbers/prism-line-numbers.css")
require("prismjs/plugins/command-line/prism-command-line.css")
require("prismjs/themes/prism-tomorrow.css")

exports.wrapPageElement = ({ element, props }) => {
  return <div>{element}</div>;
}

exports.onInitialClientRender = () => {
  // Add "buy me a coffee" when the initial rendering of the Gatsby application is done 
  // on the client because in the gatsby-ssr onRenderBody, the loading is too long. 
  // (white screen for 0.5 or 1s during rendering)
  addBuyMeACoffee();
}