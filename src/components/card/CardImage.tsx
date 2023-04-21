import React from 'react';
import { Link } from 'gatsby';
import { ImageDataLike } from 'gatsby-plugin-image';
import PreviewCompatibleImage from '../PreviewCompatibleImage';

export interface CardImageProps {
    link?: string;
    image?: ImageDataLike;
    alt?: string;
    className?: string;
    containerClassName?: string;
}

export const CardImage = ({ link, image, alt, className, containerClassName }: CardImageProps) => {
    const imageInfo = { image: image, alt: alt };
    
    return (
        <Link className={containerClassName} to={link ?? ''}>
            {image ? (
                <PreviewCompatibleImage
                    className={className}
                    imageInfo={imageInfo}
                />
            ) : (
                <div className={className} />
            )}
        </Link>
    );
};
