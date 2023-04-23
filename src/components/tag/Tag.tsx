import { Link } from 'gatsby';
import React from 'react';

export interface TagProps {
  text?: string;
  color?: string;
  link?: string;
  isRoundedFull?: boolean;
  className?:string;
}

export const Tag = ({ text, link, color = "bg-slate-100 text-slate-800", isRoundedFull = true, className = '' }: TagProps) => {
  const concatClassName = `inline-flex items-center px-3 py-0.5 ${isRoundedFull ? 'rounded-full' : 'rounded-md'} text-sm font-medium ${color} ${className}`;

  if (link)
    return <Link to={link} className={concatClassName}>{text}</Link>

  return <span className={concatClassName}>{text}</span>
};
