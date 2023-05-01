import { IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import PreviewCompatibleImage from '../PreviewCompatibleImage';

export interface ArticleImageProps {
  image: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  alt: string;
}

export const ArticleImage = ({ image, alt }: ArticleImageProps) => {
  const imageInfo = {image: image, alt: alt};

  return (
    <div className="flex-shrink-0 rounded-lg shadow-lg overflow-hidden">
        {image ? (
          <PreviewCompatibleImage
            className="rounded-lg shadow-lg object-cover object-center aspect-w-12 aspect-h-7 z-0"
            imageInfo={imageInfo}
          />
        ) : (
          <div className="relative h-64 w-64" />
        )}
      </div>
  )
};