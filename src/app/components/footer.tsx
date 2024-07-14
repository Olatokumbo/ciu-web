import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white text-[#042260] py-8">
            <div className="max-w-screen-2xl m-auto px-5 flex flex-col lg:flex-row justify-between items-center">
                <div className="mb-4 lg:mb-0">
                    <Image
                        src="/ciu_logo.png"
                        alt="Logo"
                        width={70}
                        height={70}
                        className="w-auto h-auto"
                    />
                </div>
                <div className="flex space-x-4 mb-4 lg:mb-0 text-[#042260]">
                    <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-300">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-300">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-300">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-gray-300">
                        <FaLinkedin size={24} />
                    </a>
                </div>
                <div className="text-center lg:text-right">
                    <p className="text-sm">&copy; {new Date().getFullYear()} | All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;