"use client";
import React from 'react'
import { Button } from '../ui/button';
import { motion, useInView } from 'framer-motion';

export default function AboutUs() {
 
    const pRef = React.useRef(null)
    const pInView = useInView(pRef)

    return (
        <div className='w-full grid grid-cols-2 gap-2 px-20 my-40'>
            <div className='flex flex-col justify-center px-20 space-y-2'>
                <motion.span
                
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: pInView ? 1 : 0, x: pInView ? 0 : -100 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='text-blue-500 font-bold'>About Us</motion.span>
                <motion.h1
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: pInView ? 1 : 0, x: pInView ? 0 : -100 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className='text-5xl font-bold'>We&apos;re The Top Adventure Travel Company</motion.h1>
                <motion.p
                    ref={pRef}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: pInView ? 1 : 0, x: pInView ? 0 : -100 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className='text-neutral-500 py-3'>
                    Whether you&apos;re yearning for a romantic escape filled with enchanting moments,
                    planning an exciting family-friendly adventure packed with cherished memories,
                    or embarking on a thrilling solo journey to explore the world&apos;s wonders, a reputable travel
                    agency possesses the expertise and resources to meticulously curate a custom-tailored itinerary
                    that not only fulfills but far exceeds your wildest dreams and expectations.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: pInView ? 1 : 0, x: pInView ? 0 : -100 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                >
                    <Button
                        className='bg-blue-500 text-white rounded-full hover:bg-blue-600 w-[10rem] h-[3rem]'
                    >Join us</Button>
                </motion.div>
            </div>

            <motion.div

                className='grid grid-cols-2 gap-2 '>
                <motion.img
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: pInView ? 1 : 0, x: pInView ? 0 : 100 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    src='/bg.jpg' className=' w-full rounded-tl-[4rem]'></motion.img>
                <motion.img
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: pInView ? 1 : 0, x: pInView ? 0 : 100 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    src='/bg.jpg' className=' w-full rounded-tr-[4rem]'></motion.img>
                <motion.img
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: pInView ? 1 : 0, x: pInView ? 0 : 100 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    src='/bg.jpg' className=' w-full rounded-bl-[4rem]'></motion.img>
                <motion.img
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: pInView ? 1 : 0, x: pInView ? 0 : 100 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    src='/bg.jpg' className=' w-full rounded-br-[4rem]'></motion.img>
            </motion.div>

        </div>
    )
}
