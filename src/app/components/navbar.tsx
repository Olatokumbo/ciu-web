'use client';
import { useEffect, useState } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import Image from "next/image";

export function StickyNavbar() {
    const [openNav, setOpenNav] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navMap = [{
        title: "COURSES",
        href: "#"
    }, {
        title: "STUDY",
        href: "#"
    }, {
        title: "RESEARCH",
        href: "#"
    }, {
        title: "CONTACT",
        href: "#"
    }]

    return (
        <Navbar color="blue" shadow={false} className="top-0 z-50 h-max max-w-full rounded-none py-2 px-1 lg:py-2 bg-[#003334] border-[#003334]">
            <div className="flex flex-row justify-between items-center max-w-[60rem] m-auto">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer py-1.5 font-extrabold text-lg"
                >
                    <Image
                        src="/logo.png"
                        alt="Background Image"
                        width={500}
                        height={300}
                        style={{
                            width: '10%',
                            height: 'auto',
                        }}
                    />
                </Typography>
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block"><ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-white">
                        {navMap.map(({ title, href }) => <Typography
                            as="li"
                            variant="small"
                            className="p-1 font-bold"
                        >
                            <a href={href} className="flex items-center">
                                {title}
                            </a>
                        </Typography>)}
                    </ul></div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            <MobileNav open={openNav}>
                <div className="mr-4"><ul className="mt-2 mb-4 flex flex-row justify-between lg:gap-6 text-white">
                    {navMap.map(({ title, href }) => <Typography
                        as="li"
                        variant="small"
                        className="p-1 font-bold"
                    >
                        <a href={href} className="flex items-center">
                            {title}
                        </a>
                    </Typography>)}
                </ul></div>
            </MobileNav>
        </Navbar>
    );
}