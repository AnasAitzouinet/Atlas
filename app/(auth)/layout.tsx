"use client";

import React from 'react'
import { Toaster } from "@/components/ui/sonner"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='relative w-screen h-screen flex items-center justify-center'>
            <Toaster />
             {children}
             <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#2563eb_100%)]"></div>
        </div>
    )
}
