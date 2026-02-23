import React, { useState } from "react";
import logo from "../../assets/logo/logo.svg";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";


export const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleLogo = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <nav className="font-inter sticky top-0 z-50 bg-white">
            {/* Top Info Bar */}
            <div className="w-full bg-[#262F97] text-white text-sm">
                <div className="mx-auto px-4 py-2 flex justify-center items-center gap-3">

                    <span className="font-light text-xs">India | Global Delivery</span>

                    {/* Dot */}
                    <span className="w-1.5 h-1.5 bg-[#7B7BE2] rounded-full"></span>

                    <span className="cursor-pointer font-medium hover:text-gray-200">
                        <Link to="/#contact">
                            Start a Conversation
                        </Link>
                    </span>

                </div>
            </div>


            {/* Main Navbar */}
            <header className="w-full bg-white">
                <div className="mx-auto px-4 md:px-8 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-2" onClick={handleLogo}>
                        <img src={logo} alt="Suvyavastha Logo" className="" />
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
                        <Link to="/#services" className="hover:text-[#262F97] hover:scale-105">
                            Services
                        </Link>

                        <Link to="/#industries" className="hover:text-[#262F97] hover:scale-105">
                            Industries
                        </Link>

                        {/* <Link to="/#blogs" className="hover:text-[#262F97] hover:scale-105">
                            Blogs
                        </Link> */}

                        <Link to="/#company" className="hover:text-[#262F97] hover:scale-105">
                            Company
                        </Link>

                        <Link to="/#contact" className="hover:text-[#262F97] hover:scale-105">
                            Contact
                        </Link>

                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Link to="/#contact">
                            <button className="bg-[#05129C] text-white px-6 py-2 rounded-md text-sm font-semibold hover:scale-105 hover:opacity-90 transition">
                                Book a Call
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="lg:hidden text-gray-700 focus:outline-none"
                    >
                        { open ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="lg:hidden bg-white border-t">
                        <nav className="flex flex-col gap-4 px-8 py-6 text-gray-700 font-medium">
                            <Link to="/#services" className="hover:text-[#262F97]">
                                Services
                            </Link>

                            <Link to="/#industries" className="hover:text-[#262F97]">
                                Industries
                            </Link>

                            {/* <Link to="/#insights" className="hover:text-[#262F97]">
                                Blogs
                            </Link> */}

                            <Link to="/#about" className="hover:text-[#262F97]">
                                Company
                            </Link>

                            <Link to="/#contact" className="hover:text-[#262F97]">
                                Contact
                            </Link>

                            <Link to="/#contact">
                                <button className="mt-2 bg-[#05129C] text-white px-6 py-2 rounded-md font-semibold hover:scale-105">
                                    Book a Call
                                </button>
                            </Link>
                        </nav>
                    </div>
                )}
            </header>
        </nav>
    );
};

