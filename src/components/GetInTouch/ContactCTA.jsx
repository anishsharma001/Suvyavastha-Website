import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import bgImage from "../../assets/aboutUs/decadeBg.png";
import { ArrowRight } from "lucide-react";
const ContactCTA = () => {
    return (
        <section className="w-full font-inter">

            {/* Hero Section */}
            <div className="relative h-[420px] md:h-[460px] flex items-center justify-center text-center">

                {/* Background */}
                <img
                    src={bgImage}
                    alt="Contact Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Blue Overlay */}
                {/* <div className="absolute inset-0 bg-[#0B1F6A]/90"></div> */}

                {/* Content */}
                <div className="relative z-10 max-w-2xl px-6 text-white">

                    <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
                        Need a Technology Solution <br /> for Your Business?
                    </h2>

                    <p className="mt-4 text-sm md:text-[15px] text-white/90 leading-relaxed">
                        If you are exploring AI systems, data platforms, cloud infrastructure,
                        or custom software, write to us. Share a brief overview of your
                        business goals, current challenges, and the systems you want to build
                        or improve.
                    </p>

                    {/* Button */}
                    <a
                        href="mailto:info@suvyavastha.com"
                        className="mt-8 inline-flex items-center gap-2 bg-white text-[#05129C] px-10 py-3 rounded-md text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        Write to Us
                        <ArrowRight size={16} />
                    </a>

                </div>
            </div>

            {/* Bottom Contact */}
            <div className="bg-white py-8 text-center">

                <p className="text-base text-[#3C3C3C]">Or</p>

                <p className="text-base font-semibold text-[#0B1F6A] mt-1">
                    Prefer a direct conversation?
                </p>

                <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-base font-medium text-[#2B2B2B] hover:text-[#5804BF] transition"
                >
                    <FaWhatsapp className="text-[#2B2B2B]" />
                    +91 87082 82097
                </a>

            </div>

        </section>
    );
};

export default ContactCTA;