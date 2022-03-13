import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { GatsbyImage } from "gatsby-plugin-image"

const PreviewCompatibleImage = ({ className, imageInfo }) => {
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <GatsbyImage className={`${className}`} image={image.childImageSharp.gatsbyImageData} alt={alt}/>
    )
  }

  if (!!childImageSharp) {
    return <GatsbyImage className={`${className}`} image={childImageSharp.gatsbyImageData} alt={alt}/>
  }

  if (!!image && typeof image === 'string')
    return <img className={`${className}`} src={image} alt={alt} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
