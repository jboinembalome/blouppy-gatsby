import React from 'react'
import PropTypes from 'prop-types'
import { PortfolioPostTemplate } from '../../templates/portfolio-post-template'

const PortfolioPostPreview = ({ entry, widgetFor }) => (
  <PortfolioPostTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

PortfolioPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PortfolioPostPreview
