"use client";

import Navbar from "@/components/Navbar";
import AboutUs from "@/components/sections/AboutUs";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDownIcon, Facebook } from "lucide-react";

export default function Hero() {
    return (
        <motion.div
            initial={{ padding: 0 }}
            animate={{ padding: "1.25rem" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center items-center z-20">
            <motion.div
                initial={{ height: "110vh" }}
                animate={{ height: "96vh" }}
                transition={{ duration: 0.5, delay: 0.2 }}

                className="w-full  relative flex justify-center items-center">
                <motion.img
                    initial={{ borderRadius: "0" }}
                    animate={{ borderRadius: "1.5rem" }}
                    transition={{ duration: 0.7, delay: 0.3 , type: 'spring', stiffness: 100}}

                    src="/bg.jpg" alt="test" className="object-cover w-full h-full absolute" />
                <Navbar />
                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2, type: 'spring', stiffness: 100 }}
                    className="absolute">
                    <h1 className="text-3xl font-black text-white">
                        Enjoy the beauty of
                    </h1>
                    <h1 className="text-9xl font-black text-white tracking-tight">
                        Traveling
                    </h1>
                    <p className="text-white lowercase py-2 tracking-tight ">
                        TRAVEL AND SADDEL UP FOR THE JOURNEY Exploring the World One Adventure at a Time
                    </p>
                </motion.div>

                <Button
                    variant={"outline"}
                    size={"icon"}
                    className="absolute bottom-10 left-1/2 rounded-full z-10">
                    <ArrowDownIcon size={24} />
                </Button>

            </motion.div>
        </motion.div>
    );
}
