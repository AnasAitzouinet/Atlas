"use client";
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';



const Trips = [
    {
        id: "1",
        name: "Marrakech",
        description: "Explore the beauty of Marrakech",
        image: "/Home.jpg"
    },
    {
        id: "2",
        name: "Essaouira",
        description: "Explore the beauty of Essaouira",
        image: "https://images.pexels.com/photos/255545/pexels-photo-255545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: "3",
        name: "Ouarzazate",
        description: "Explore the beauty of Ouarzazate",
        image: "https://images.pexels.com/photos/3581916/pexels-photo-3581916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]

import { initializePaddle, Paddle } from '@paddle/paddle-js';
import DestinationItems from '@/components/DestinationItems';
import DestinationNavbar from '@/components/DestinationNavbar';
import Link from 'next/link';



export default function Destinations() {
    const [active, setActive] = useState('Trips')

    return (
        <main className='w-screen h-screen lg:relative'>
            <div className='lg:w-[35%] h-[25%]   lg:fixed top-0 left-0'>
                <div className='p-5 h-full w-full '>
                    <div className='h-full w-full relative'>
                        <img src="/Home.jpg" alt="" className=' w-full h-full object-cover rounded-3xl absolute ' />
                        <h1
                            className='text-white text-3xl font-black  bottom-0 left-0 absolute p-5'
                        >
                            Destinations
                        </h1>
                        <DestinationNavbar />
                    </div>
                    <div className='lg:my-[10rem]  hidden lg:block'>
                        <div
                            onClick={() => setActive('Trips')}
                            className='flex justify-start items-center gap-x-2 cursor-pointer w-fit  '>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: active === 'Trips' ? '5rem' : 0 }}
                                transition={{ duration: 0.5 }}
                                className='w-[5rem] h-0.5 bg-blue-600 rounded-full' />
                            <h1 className='text-4xl font-bold'>Trips</h1>
                        </div>
                        <div
                            onClick={() => setActive('Activites')}
                            className='flex justify-start items-center gap-x-2 cursor-pointer w-fit  '>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: active === 'Activites' ? '5rem' : '0' }}
                                transition={{ duration: 0.5 }}
                                className='w-[5rem] h-0.5 bg-blue-600 rounded-full' />
                            <h1 className='text-4xl font-bold'>Activites</h1>
                        </div>
                        <div
                            onClick={() => setActive('WishList')}
                            className='flex justify-start items-center gap-x-2 cursor-pointer w-fit  '>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: active === 'WishList' ? '5rem' : '0' }}
                                transition={{ duration: 0.5 }}
                                className='w-[5rem] h-0.5 bg-blue-600 rounded-full' />
                            <h1 className='text-4xl font-bold'>Wishlist</h1>
                        </div>
                        <div
                            onClick={() => setActive('Airports')}
                            className='flex justify-start items-center gap-x-2 cursor-pointer w-fit  '>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: active === 'Airports' ? '5rem' : '0' }}
                                transition={{ duration: 0.5 }}
                                className='w-[5rem] h-0.5 bg-blue-600 rounded-full' />
                            <h1 className='text-4xl font-bold'>Transfer</h1>
                        </div>
                        <div className='mt-20 '>
                            <div
                                onClick={() => setActive('')}
                                className='flex justify-start items-center gap-x-2 cursor-pointer w-fit  '>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: active === '' ? '5rem' : '0' }}
                                    transition={{ duration: 0.5 }}
                                    className='w-[5rem] h-0.5 bg-blue-600 rounded-full' />
                                <h1 className='text-4xl font-bold'>Home</h1>
                            </div>
                            <Link
                                href='/SignIn'
                                className='flex justify-start items-center gap-x-2 cursor-pointer w-fit  '>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: active === '' ? '5rem' : '0' }}
                                    transition={{ duration: 0.5 }}
                                    className='w-[5rem] h-0.5 bg-blue-600 rounded-full' />
                                <h1 className='text-4xl font-bold'>Sign In</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:w-[65%] lg:h-screen  top-0 right-0 lg:fixed overflow-auto'>
                <div className='p-5 w-full h-full '>
                    <div className='flex flex-col gap-5'>
                        {
                            Trips.map((_, index) => (
                                <DestinationItems _={_} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}
