"use client";
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Profile() {
  return (
    <div
    className='w-3/4 h-4/5 bg-white border rounded-3xl shadow-lg p-5 mx-auto  '
    >
        <div className='flex justify-start items-center gap-x-2'>
            <Avatar className='w-20 h-20'>
              <AvatarImage className='' src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
            <h1 className='text-2xl font-semibold'>
                Anas Shad
            </h1>
            
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}
