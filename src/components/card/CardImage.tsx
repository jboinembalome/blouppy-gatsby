import React from 'react';
import { ImageDataLike } from 'gatsby-plugin-image';
import PreviewCompatibleImage from '../preview-compatible-image/PreviewCompatibleImage';

export interface CardImageProps {
    image?: ImageDataLike;
    alt?: string;
    className?: string;
    containerClassName?: string;
}

export const CardImage = ({ image, alt, className, containerClassName }: CardImageProps) => {
    const imageInfo = { image: image, alt: alt };
    
    return (
        <div className={containerClassName}>
            {image ? (
                <PreviewCompatibleImage
                    className={className}
                    imageInfo={imageInfo}
                />
            ) : (
                <div className={className} />
            )}
        </div>
    );
};
