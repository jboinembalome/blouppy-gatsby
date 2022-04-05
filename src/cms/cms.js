import CMS from 'netlify-cms-app'

import ResumePagePreview from './preview-templates/ResumePagePreview'
import PortfolioPostPreview from './preview-templates/PortfolioPostPreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('resume', ResumePagePreview)
CMS.registerPreviewTemplate('portfolio', PortfolioPostPreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
