'use client'
import Image from "next/image";
import { StickyNavbar } from "./components/navbar";
import { Button } from "@material-tailwind/react";

export default function Home() {
  return (
    <main className="flex flex-col">
      <StickyNavbar />
      <div className="relative w-full p-6 sm:p-12 md:p-24 mt-9 z-20">
        <h1 className="font-bold text-4xl sm:text-6xl md:text-8xl text-white">START</h1>
        <h1 className="font-bold text-4xl sm:text-6xl md:text-8xl text-white mt-3 sm:mt-4 md:mt-5">YOUR CAREER</h1>
        <Button
          color="white"
          size="lg"
          className="my-5 py-2 px-5 sm:py-3 sm:px-6 md:py-4 md:px-8 flex items-center gap-2 hover:shadow-lg hover:shadow-gray-800 hover:bg-[#003334] hover:text-white rounded-none"
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
      <Image
        src="/bg.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="-z-10"
        priority
      />
    </main>
  );
}
