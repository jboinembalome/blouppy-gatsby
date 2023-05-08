import { SocialLink } from "./SocialLink";
import React from 'react';

interface SocialLinksProps {
    socials: SocialLink[];
    className?: string;
}

export const SocialLinks = ({ socials, className }: SocialLinksProps) => {

    return (
        <ul role="list" className={className}>
            {socials.map((social) => (
                <li key={social.name}>
                    <a href={social.link} className="text-gray-400 hover:text-gray-300">
                        <span className="sr-only">{social.name}</span>
                        {social.icon}
                    </a>
                </li>
            ))}
        </ul>
    );
};