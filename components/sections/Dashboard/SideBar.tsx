"use client";

import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip"
import Link from 'next/link';
import { Home, LineChart, Package, Package2, Settings, ShoppingCart, Users2 } from 'lucide-react';
import { usePathname } from 'next/navigation';
import path from 'path';

const SideBarItems = [
    {
        id: "1",
        name: "Dashboard",
        path: "/Dashboard",
        icon: Home
    },
    {
        id: "2",
        name: "Reservations",
        path: "/Dashboard/Reservations",
        icon: ShoppingCart
    },
    {
        id: "3",
        name: "Destinations",
        path: "/Dashboard/Destinations",
        icon: Package
    },
    {
        id: "4",
        name: "Customers",
        path: "/Dashboard/Customers",
        icon: Users2
    } 

]


export default function SideBar() {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <TooltipProvider>

            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 py-4">
                    <Link
                        href="#"
                        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                    >
                        <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                
                    {
                        SideBarItems.map((item) => (
                            <Tooltip key={item.id}>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={item.path}
                                        className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${pathname === item.path ? 'bg-accent text-accent-foreground' : ''}`}
                                    >
                                        <item.icon className="h-5 w-5" />
                                        <span className="sr-only">{item.name}</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right">{item.name}</TooltipContent>
                            </Tooltip>
                        ))
                    }
                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Settings className="h-5 w-5" />
                                <span className="sr-only">Settings</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Settings</TooltipContent>
                    </Tooltip>
                </nav>
            </aside>
        </TooltipProvider>
    )
}

