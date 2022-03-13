import React from 'react';
import './src/styles/site.scss';

require("prismjs/plugins/line-numbers/prism-line-numbers.css")
require("prismjs/plugins/command-line/prism-command-line.css")
require("prismjs/themes/prism-tomorrow.css")

export function wrapPageElement({ element, props }) {
  return <div>{element}</div>;
}
