import React from 'react'
import { ResumePageTemplate } from '../../templates/resume-template'

const ResumePagePreview = ({ entry, widgetFor }: any) => {
  const technicalSkills = entry.getIn(['data', 'technicalSkills']);
  const softSkills = entry.getIn(['data', 'softSkills']);

  return (<ResumePageTemplate
    title={entry.getIn(['data', 'title'])}
    resumeimage={entry.getIn(['data', 'resumeimage'])}
    job={entry.getIn(['data', 'job'])}
    technicalSkills={technicalSkills && technicalSkills.toJS()}
    softSkills={softSkills && softSkills.toJS()}
    englishResumeJB={entry.getIn(['data', 'englishResumeJB'])}
    frenchResumeJB={entry.getIn(['data', 'frenchResumeJB'])}    
    content={widgetFor('body')}
  />
)}

export default ResumePagePreview
