import React from 'react'
import { PortfolioPostTemplate } from '../../templates/portfolio-post-template'

const PortfolioPostPreview = ({ entry, widgetFor }: any) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <PortfolioPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
      link={entry.getIn(['data', 'link'])}
    />
  )
}

export default PortfolioPostPreview
