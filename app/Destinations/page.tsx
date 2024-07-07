"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';



const Trips = [
    {
        name: "Marrakech",
        description: "Explore the beauty of Marrakech",
        image: "/Home.jpg"
    },
    {
        name: "Essaouira",
        description: "Explore the beauty of Essaouira",
        image: "https://images.pexels.com/photos/255545/pexels-photo-255545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Ouarzazate",
        description: "Explore the beauty of Ouarzazate",
        image: "https://images.pexels.com/photos/3581916/pexels-photo-3581916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]




export default function Destinations() {
    const [active, setActive] = React.useState('Trips')
    
    return (
        <main className='w-screen h-screen relative'>
            <div className='w-[35%] h-screen fixed top-0 left-0'>
                <div className='p-5 h-full w-full '>
                    <div className='h-[25%] w-full relative'>
                        <img src="/Home.jpg" alt="" className=' w-full h-full object-cover rounded-3xl absolute ' />
                        <h1
                            className='text-white text-3xl font-black  bottom-0 left-0 absolute p-5'
                        >
                            Destinations
                        </h1>
                    </div>
                    <div className='my-[10rem]'>
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
                    </div>
                </div>
            </div>
            <div className='w-[65%] h-screen  top-0 right-0 fixed overflow-auto'>
                <div className='p-5 w-full h-full '>
                    <div className='flex flex-col gap-5'>
                        {
                            Trips.map((_, index) => (
                                <div key={index} className='w-full h-[33rem] bg-red-500 rounded-3xl relative overflow-hidden'>
                                    <img src={_.image} alt="" className=' w-full h-full object-cover rounded-3xl absolute ' />
                                    <div className='absolute bottom-10 px-8 left-0 z-20 w-full'>
                                        <h1 className='text-5xl text-white font-bold'>{_.name}</h1>
                                        <p className='text-xl text-gray-400 font-semibold'>{_.description}</p>
                                        <p className='text-xl text-blue-300 font-semibold'>14$ / night</p>
                                        <Separator className='w-full  mb-5 mt-7 bg-gray-400/40' />
                                        <div className='flex justify-start gap-2 items-center w-full'>
                                            <Toggle
                                                variant="outline"
                                                size={"sm"}
                                                className='rounded-full h-10 w-10 
                                                 bg-white text-red-500 group   hover:text-red-500
                                                 data-[state=on]:bg-red-500 data-[state=on]:text-white border-0 transition-colors ease-in-out duration-700'
                                            >
                                                <Heart className='group-hover:scale-125 transition-all duration-500 ease-in-out ' />
                                            </Toggle>
                                            <Button
                                                variant={"ghost"}
                                                className='text-white rounded-full border px-5 py-2 hover:bg-white hover:text-black transition-colors ease-in-out duration-700'
                                            >
                                                Book now
                                            </Button>
                                        </div>
                                    </div>
                                    <Button
                                        variant={"ghost"}
                                        className='text-white
                                        absolute bottom-10 right-0 mx-8 z-20
                                        rounded-full border px-5 py-2 hover:bg-white hover:text-black transition-colors ease-in-out duration-700'
                                    >
                                        What is on the trip ?
                                    </Button>
                                    <div className='w-full h-full absolute bg-gradient-to-b from-transparent to-black/70'></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}
