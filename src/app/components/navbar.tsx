'use client';
import { useEffect, useState } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import Image from "next/image";
import { primaryColor } from "../../../constant";

export function StickyNavbar() {
    const [openNav, setOpenNav] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navMap = [{
        title: "CONTACT US",
        href: "#"
    }]

    return (
        <Navbar color="transparent" shadow={false} className="top-0 z-50 h-max max-w-full rounded-none py-2 px-5 lg:py-2">
            <div className="flex flex-row justify-between items-center max-w-[60rem] m-auto">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer py-1.5 font-extrabold text-lg"
                >
                    <Image
                        src="/ciu_logo.png"
                        alt="Background Image"
                        width={60}
                        height={60}
                        style={{
                            // width: '11%',
                            height: 'auto',
                        }}
                    />
                </Typography>
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block"><ul className={`mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-[${primaryColor}]`}>
                        {navMap.map(({ title, href }, index) => <Typography
                            key={index}
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
                                stroke={primaryColor}
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
                                stroke={primaryColor}
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
                <div className="mr-4"><ul className={`mt-2 mb-4 flex flex-row justify-evenly lg:gap-6 text-[${primaryColor}]`}>
                    {navMap.map(({ title, href }, index) => <Typography
                        key={index}
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