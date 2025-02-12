"use client";

import React from 'react'
import { Button } from '../ui/button';
import { motion, useInView } from 'framer-motion';
import { BadgeCent, Check, HeadphonesIcon, MapPinned } from 'lucide-react';

export default function WhyUs() {
    const spanRef = React.useRef(null)

    const h1Ref = React.useRef(null)

    const pRef = React.useRef(null)
    const pInView = useInView(pRef)

    return (
        <div className='w-full grid grid-cols-2 gap-2 px-20 my-48'>
            <div className='flex flex-col justify-center px-20 space-y-2'>
                <motion.span
                    ref={spanRef}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: pInView ? 1 : 0, x: pInView ? 0 : -100 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='text-blue-500 font-bold'>Why Us</motion.span>
                <motion.h1
                    ref={h1Ref}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: pInView ? 1 : 0, x: pInView ? 0 : -100 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className='text-5xl font-bold'>Choose Your Ideal Vacation Package Through Our Services</motion.h1>
                <motion.p
                    ref={pRef}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: pInView ? 1 : 0, x: pInView ? 0 : -100 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className='text-neutral-500 py-3'>
                    Whether you&apos;re yearning for a romantic escape filled with enchanting moments, planning an
                    exciting family-friendly adventure packed with cherished memories, or embarking on a thrilling solo
                    journey to explore the world&apos;s wonders, a reputable travel agency possesses the expertise and resources to meticulously curate a
                    custom-tailored itinerary that not only fulfills but far exceeds your wildest dreams and expectations.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: pInView ? 1 : 0, x: pInView ? 0 : -100 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className='grid grid-cols-2 gap-y-3 justify-center items-center py-2'
                >
                    {WhyUsComps.map((item, index) => (
                        <div key={index} className='flex gap-x-2 items-center'>
                            <item.icon className='w-8 h-8 text-blue-500' />
                            <p className='text-md font-semibold'>{item.title}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: pInView ? 1 : 0, x: pInView ? 0 : -100 }}
                transition={{ duration: 0.5, delay: 1.1 }} className='w-full h-full'>
                <img src="/bg.jpg" alt="" className='rounded-3xl shadow-xl' />
            </motion.div>

        </div>
    )
}


const WhyUsComps = [
    {
        id:1,
        icon: HeadphonesIcon,
        title: '24/7 Customer Support',
    },
    {
        id:2,
        icon: Check,
        title: 'Best Price Guarantee',
    },
    {
        id:3,
        icon: BadgeCent ,
        title: 'Flexible Payment Options',
    },
    {
        id:4,
        icon: MapPinned ,
        title: 'Fast pick-up & drop-off services',
    }
]