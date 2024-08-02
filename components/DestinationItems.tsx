"use client"

import React, { useState, useEffect } from 'react'
import { Separator } from './ui/separator'
import { Toggle } from './ui/toggle'
import { Heart } from 'lucide-react'
import { Button } from './ui/button'
import WhatIsOn from './WhatIsOn'

interface Destination {
    id: string
    name: string
    description: string
    image: string
}

interface DestinationItemsProps {
    id: string
    state: boolean
}

export default function DestinationItems({ _ }: { _: Destination }) {


    return (
        <div className='w-full h-[33rem] bg-red-500 rounded-3xl relative overflow-hidden'>
            <img src={_.image} alt="" className=' w-full h-full object-cover rounded-3xl absolute ' />
            <Toggle
                variant="outline"
                size={"sm"}
                className='absolute z-50 top-2 md:hidden left-2 rounded-full h-10 w-10 bg-white text-red-500 group hover:text-red-500
                            data-[state=on]:bg-red-500 data-[state=on]:text-white border-0 transition-colors ease-in-out duration-700'
            >
                <Heart className='group-hover:scale-125 transition-all duration-500 ease-in-out' />
            </Toggle>
            <div className='absolute bottom-10 px-5 lg:px-8 left-0 z-20 w-full'>
                <h1 className='lg:text-5xl text-2xl text-white font-bold'>{_.name}</h1>
                <p className='lg:text-xl text-gray-400 font-semibold'>{_.description}</p>
                <p className='lg:text-xl text-blue-300 font-semibold'>14$ / night</p>
                <Separator className='w-full mb-5 mt-7 bg-gray-400/40' />

                <div className='flex justify-start gap-2 items-center w-full'>
                    <Toggle
                        variant="outline"
                        size={"sm"}
                        className='hidden md:block rounded-full h-10 w-10 bg-white text-red-500 group hover:text-red-500
                            data-[state=on]:bg-red-500 data-[state=on]:text-white border-0 transition-colors ease-in-out duration-700'
                    >
                        <Heart className='group-hover:scale-125 transition-all duration-500 ease-in-out' />
                    </Toggle>
                    <Button
                        variant={"ghost"}
                        className='text-white rounded-full border px-5 py-2 hover:bg-white hover:text-black transition-colors ease-in-out duration-700'
                    >
                        Book now
                    </Button>
                </div>
            </div>
            <WhatIsOn>
                <Button
                    variant={"ghost"}
                    className='text-white absolute bottom-10 right-0 mx-8 z-20 w-2/4 
                    rounded-full border px-5 py-2 hover:bg-white hover:text-black transition-colors ease-in-out duration-700'
                >
                    What is on the trip?
                </Button>
            </WhatIsOn>
            <div className='w-full h-full absolute bg-gradient-to-b from-transparent to-black/70'></div>
        </div>
    )
}
