import React from 'react';
import { Card } from './Card';
import PreviewCompatibleImage from '../preview-compatible-image/PreviewCompatibleImage';
import { ImageDataLike } from 'gatsby-plugin-image';
import { SocialLink, SocialLinks } from '../social-link';

export interface UserCardProps {
    username: string;
    photo: ImageDataLike;
    altPhoto?: string;
    job?: string;
    socials?: SocialLink[]
    socialsClassName?: string;
    className?: string;
}

export const UserCard = ({ username, photo, altPhoto, job, socials, socialsClassName, className }: UserCardProps) => {
    const imageInfo = { image: photo, alt: altPhoto ?? `User card ${username}` };

    return (
        <Card className={`py-8 px-6 bg-gray-800 text-center rounded-lg ${className}`}>
            <div className="space-y-6">
                <PreviewCompatibleImage
                    className="mx-auto h-24 w-24 rounded-full relative z-0"
                    imageInfo={imageInfo}
                />
                <div className="space-y-2">
                    <div className="font-medium text-lg leading-6 space-y-1">
                        <p className="text-white">{username}</p>
                        {job && (
                            <p className="text-primary-400 dark:text-primary-300 text-base">
                                {job}
                            </p>
                        )}
                    </div>
                    {socials && socials.length && (
                        <SocialLinks socials={socials} className={socialsClassName} />
                    )}
                </div>
            </div>
        </Card>
    );
};
