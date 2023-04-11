import React from "react";
import {
  GatsbyImage,
  IGatsbyImageData,
  ImageDataLike,
  getImage,
} from "gatsby-plugin-image";

interface PreviewCompatibleImageProps {
  className?: string;
  imageInfo?: {
    image?: ImageDataLike;
    alt?: string;
    childImageSharp?: {
      gatsbyImageData?: IGatsbyImageData;
    };
  };
  loading?: "eager" | "lazy";
}

const PreviewCompatibleImage = ({
  className,
  imageInfo,
  loading,
}: PreviewCompatibleImageProps) => {
  if (!imageInfo) return null;

  const { alt = "", childImageSharp, image } = imageInfo;

  const gatsbyImageData = !!image ? getImage(image) : null;
  if (!!gatsbyImageData) {
    return (
      <GatsbyImage
        className={className}
        image={gatsbyImageData}
        loading={loading}
        alt={alt}
      />
    );
  }

  if (!!childImageSharp && !!childImageSharp.gatsbyImageData) {
    return (
      <GatsbyImage
        className={`${className}`}
        image={childImageSharp.gatsbyImageData}
        loading={loading}
        alt={alt}
      />
    );
  }

  if (!!image && typeof image === "string")
    return <img className={`${className}`} src={image} alt={alt} />;

  return null;
};

export default PreviewCompatibleImage;
