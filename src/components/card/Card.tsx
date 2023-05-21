import { Link } from 'gatsby';
import React from 'react';

export interface CardProps {
    children: JSX.Element | JSX.Element[];
    link?: string;
    className?: string
}

export const Card = ({ children, link, className }: CardProps) => {
    if (link)
        return (
            <Link className={className} to={link ?? ''}>
                {children}
            </Link>
        );

    return (
        <div className={className}>
            {children}
        </div>
    );
};
