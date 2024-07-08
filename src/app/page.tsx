'use client'
import Image from "next/image";
import { StickyNavbar } from "./components/navbar";
import { Button } from "@material-tailwind/react";
import InfoSection from "./components/info-section";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full bg-[#003334] px-5 md:px-5 lg:px-14">
      <StickyNavbar />
      <div className="relative w-full h-full">
        <div className="absolute w-fit pr-10 py-5 md:py-10 lg:py-16 lg:pr-20 z-10 left-0 bottom-0 bg-[#003334] rounded-tr-lg border-t-4 border-r-4">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-6xl text-white">Welcome to CIU</h1>
          <h1 className="font-light text-xs md:text-2xl text-white mt-3 sm:mt-2 md:mt-5">Start your education with us</h1>
          <Button
            color="white"
            size="lg"
            className="hidden mt-5 sm:flex items-center gap-2 hover:shadow-lg hover:shadow-gray-800 hover:bg-[#003334] hover:text-white rounded-none"
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
        <img className="rounded-2xl border-white border-4" src="/cover.webp" alt="Cover Image" />
      </div>
      <InfoSection />
    </main>
  );
}
