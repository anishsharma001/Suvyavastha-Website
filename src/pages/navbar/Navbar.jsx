import React, { useState } from "react";
import logo from "../../assets/logo/logo.png";

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="font-inter">
            {/* Top Info Bar */}
            <div className="w-full bg-[#262F97] text-white text-sm">
                <div className="mx-auto px-4 py-2 flex justify-center items-center gap-3">

                    <span className="font-light text-xs">India | Global Delivery</span>

                    {/* Dot */}
                    <span className="w-1.5 h-1.5 bg-[#7B7BE2] rounded-full"></span>

                    <span className="cursor-pointer font-medium">
                        Start a Conversation
                    </span>

                </div>
            </div>


            {/* Main Navbar */}
            <header className="w-full bg-white">
                <div className="mx-auto px-4 md:px-8 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="Suvyavastha Logo" className="" />
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
                        <a href="#" className="hover:text-[#262F97]">Services</a>
                        <a href="#" className="hover:text-[#262F97]">Industries</a>
                        <a href="#" className="hover:text-[#262F97]">Blogs</a>
                        <a href="#" className="hover:text-[#262F97]">Company</a>
                        <a href="#" className="hover:text-[#262F97]">Contact</a>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <button className="bg-[#05129C] text-white px-6 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition">
                            Book a Call
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="lg:hidden text-gray-700 focus:outline-none"
                    >
                        ☰
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="lg:hidden bg-white border-t">
                        <nav className="flex flex-col gap-4 px-4 py-4 text-gray-700 font-medium">
                            <a href="#">Services</a>
                            <a href="#">Industries</a>
                            <a href="#">Blogs</a>
                            <a href="#">Company</a>
                            <a href="#">Contact</a>
                            <button className="mt-2 bg-[#05129C] text-white py-2 rounded-md font-semibold">
                                Book a Call
                            </button>
                        </nav>
                    </div>
                )}
            </header>
        </nav>
    );
};

