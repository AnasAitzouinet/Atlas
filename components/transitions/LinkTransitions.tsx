"use client";

import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { motion } from 'framer-motion';

interface TransitionLinkProps extends LinkProps {
    href: string;
    children: React.ReactNode;
}


export default function LinkTransitions({
    href,
    children,
    ...props
}: TransitionLinkProps) {

    const router = useRouter()

    const handelTransition = async (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault()

        const body = document.querySelector('body')

        body?.classList.add('page-transition')

        await new Promise((resolve) => {
            // Customize this duration to match your animation
            setTimeout(resolve, 500);
        });
        
        router.push(href)

        await new Promise((resolve) => {
            // Customize this duration to match your animation
            setTimeout(resolve, 500);
        });

        body?.classList.remove('page-transition')

    }


    return (
        <Link
            href={href}
            {...props}
            onClick={handelTransition}
        >
            {children}
        </Link>
    )
}
