import Image from "next/image";
import { StickyNavbar } from "./components/navbar";

export default function Home() {
  return (
    <main className="flex flex-col">
      <StickyNavbar />
      <div className="relative w-full h-screen">
        <Image
          src="/bg.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </main>
  );
}
