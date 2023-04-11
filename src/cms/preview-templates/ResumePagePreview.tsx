import React from 'react'
import { ResumePageTemplate } from '../../templates/resume-template'

const ResumePagePreview = ({ entry, widgetFor }: any) => (
  <ResumePageTemplate
    title={entry.getIn(['data', 'title'])}
    subtitle={entry.getIn(['data', 'subtitle'])}
    content={widgetFor('body')}
  />
)

export default ResumePagePreview
