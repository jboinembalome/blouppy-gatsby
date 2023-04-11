import React from 'react'
import { IndexPageTemplate } from '../../templates/index-page-template'

const IndexPagePreview = ({ entry, getAsset }: any) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        mainpitch={data.mainpitch || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPagePreview
