"use client";
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Button } from './ui/button';
import { User2Icon } from 'lucide-react';
import Link from 'next/link';
import { AnimatePresence, motion } from "framer-motion";
import LinkTransitions from "./transitions/LinkTransitions";



const NavItems = [
    {
        name: 'Destinations',
        href: '/Destinations'
    },
    {
        name: 'Private Cars',
        href: '#'
    },
    {
        name: 'Contact',
        href: '#'
    },
]

const SlideTabs = () => {
    const [position, setPosition] = useState<Position>({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }));
            }}
            className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
        >
            {
                NavItems.map((item, index) => (
                    <Tab href={item.href} key={index} setPosition={setPosition}>{item.name}</Tab>
                ))
            }
            <Tab href="/" setPosition={setPosition}>
                <User2Icon className='w-6 h-6' />

            </Tab>
            <Cursor position={position} />
        </ul>
    );
};

const Tab = ({
    children,
    setPosition,
    href,
}: {
    children: string | React.ReactNode;
    setPosition: Dispatch<SetStateAction<Position>>;
    href: string;
}) => {
    const ref = useRef<null | HTMLLIElement>(null);

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return;

                const { width } = ref.current.getBoundingClientRect();

                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                });
            }}
            className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs  text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
        >
            <LinkTransitions href={href}>{children}</LinkTransitions>

        </li>
    );
};

const Cursor = ({ position }: { position: Position }) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            className="absolute z-0 h-7 rounded-full bg-black md:h-12"
        />
    );
};

type Position = {
    left: number;
    width: number;
    opacity: number;
};
export default function Navbar() {
    const [scroll, setScroll] = useState(false)
    const [isEnd, setIsEnd] = useState(false)

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleScroll = () => {
            const isMobile = window.innerWidth < 768;
            if (window.scrollY > 100 && !isMobile) {
                setScroll(true);
            } else {
                setScroll(false);
            }
            const end = document.getElementById('end')
            // check if the end element is in the viewport
            if (end) {
                const endPosition = end.getBoundingClientRect()
                if (endPosition.top < window.innerHeight) {
                    setIsEnd(true)
                } else {
                    setIsEnd(false)
                }
            }
        };


        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    if (scroll) {
        return (
            <AnimatePresence mode="wait">
                <motion.div
                    key={'navbar'}
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0, bottom: isEnd ? "16rem " : "2.5rem" }}
                    transition={{ duration: 0.5, delay: 0.1, type: 'spring' }}
                    exit={{ opacity: 0, y: -100 }}
                    className={`fixed z-50 ${isEnd ? "bottom-10" : "bottom-64"}`}>
                    <SlideTabs />
                </motion.div>
            </AnimatePresence>
        )
    }

    return (
        <div className='absolute top-0 w-full p-5'>
            <nav className='w-full flex justify-between items-center'>

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
                >
                    <img src="/Logo.png" alt="" className='w-12 ' />
                </motion.div>
                <div>
                    <div className='flex justify-center items-center gap-x-2'>
                        {NavItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 100 }}
                            >
                                <Button
                                    variant={"ghost"}
                                    className='text-white rounded-full border px-5 py-2 hover:bg-white hover:text-black transition-colors ease-in-out duration-700'
                                >
                                    <Link href={item.href} >{item.name}</Link>
                                </Button>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}>
                            <Button
                                variant={"ghost"}
                                size={"icon"}
                                className='hover:text-white hover:bg-transparent  rounded-full border   bg-white text-black transition-all duration-500 ease-in-out'
                            >
                                <User2Icon className='w-6 h-6' />
                            </Button>
                        </motion.div>
                    </div>
                </div>

            </nav>
        </div>
    )
}
