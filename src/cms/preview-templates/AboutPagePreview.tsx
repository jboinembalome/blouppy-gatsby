import React from 'react'
import { AboutPageTemplate } from '../../templates/about-page-template'

const AboutPagePreview = ({ entry, widgetFor }: any) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

export default AboutPagePreview
