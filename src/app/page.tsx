'use client';
import Image from "next/image";
import { StickyNavbar } from "./components/navbar";
import { Button } from "@material-tailwind/react";
import AboutUsSection from "./components/about-us-section";
import { accentColor, primaryColor, secondaryColor } from "../../constant";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen px-5 md:px-5 lg:px-14">
      <StickyNavbar />
      <div className="relative flex items-center justify-center w-full h-full max-w-screen-2xl mx-auto">
        <img className={`rounded-2xl border-[#d4ad6e] border-4 w-full h-full object-cover`} src="/cover.webp" alt="Cover Image" />
        <div className={`absolute flex bottom-0 left-0 flex-col items-start w-fit pr-10 py-5 md:py-10 lg:py-16 lg:pr-20 z-10 bg-white rounded-tr-lg border-t-4 border-r-4 border-[#d4ad6e]`}>
          <h1 className="font-bold text-2xl sm:text-3xl md:text-6xl text-[#042260]">Welcome to <span className="text-[#d4ad6e]">CIU</span></h1>
          <h1 className="font-light text-xs md:text-2xl text-[#042260] mt-3 sm:mt-2 md:mt-5">Start your education with us</h1>
          <Button
            color="white"
            size="lg"
            className="hidden mt-5 sm:flex items-center gap-2 hover:shadow-lg bg-[#042260] text-white hover:shadow-gray-400 rounded-md hover:text-[#d4ad6e]"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </div>
      </div>
      <AboutUsSection />
    </main>
  );
}