import React from 'react';

export interface CardProps {
    children: JSX.Element | JSX.Element[];
    className?: string
}

export const Card = ({ children, className }: CardProps) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};
