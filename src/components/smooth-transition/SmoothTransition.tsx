import { Transition } from '@headlessui/react';
import React from 'react';

export interface SmoothTransitionProps {
    children: JSX.Element | JSX.Element[];
    show?: boolean;
    appear?: boolean;
    className?: string
}

export const SmoothTransition = ({ show = true, appear = true, children, className }: SmoothTransitionProps) => {
    return (
        <Transition
            show={show}
            appear={appear}
            enter="transition-all duration-1000"
            enterFrom="translate-y-24 opacity-0"
            enterTo="translate-y-0 opacity-100"
            className={className}>
            {children}
        </Transition>
    );
};
