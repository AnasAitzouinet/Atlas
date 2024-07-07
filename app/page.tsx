"use client";

import AboutUs from "@/components/sections/AboutUs";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import { Question } from "@/components/sections/Questions";
import { Trending } from "@/components/sections/Trending";
import WhyUs from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <AboutUs />
      <Trending />
      <WhyUs />
      <div className="w-full mx-auto flex flex-col justify-center items-center my-40">
        <h1 className="text-5xl font-bold py-8">
          Frequently Asked
          <span className="text-blue-500"> Question</span>
        </h1>
        <Question />
      </div>
      <Footer />
    </main>
  );
}
