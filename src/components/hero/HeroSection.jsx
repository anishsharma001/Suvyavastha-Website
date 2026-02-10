import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import heroVideo from "../../assets/hero/heroVideo.mp4";

const HeroSection = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    const totalWidth = marquee.scrollWidth / 2;

    gsap.to(marquee, {
      x: -totalWidth,
      duration: 28, // ⬅️ adjust speed here (lower = faster)
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section className="relative w-full h-[86vh] min-h-[600px] overflow-hidden font-inter">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F6A]/90 via-[#0B1F6A]/70 to-[#0B1F6A]/90" />

      {/* Grid Overlay Effect */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
        <div className="border border-white/10"></div>
        <div className="border border-white/10"></div>
        <div className="border border-white/10"></div>
        <div className="border border-white/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl sm:text-4xl font-semibold leading-tight">
            When your business can’t afford
            <br />
            breakdowns, shortcuts, or rewrites
          </h1>

          <p className="mt-5 text-sm sm:text-lg font-light">
            We plan carefully, build thoughtfully, and stay accountable after
            launch.
          </p>

          <p className="mt-3 text-xs sm:text-base font-medium">
            Built for long-term use &nbsp;•&nbsp; Designed around real users
            &nbsp;•&nbsp; Owned beyond delivery
          </p>

          <button className="mt-8 inline-flex items-center gap-2 bg-white text-[#0B1F6A] px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-100 transition">
            Consult with our Technical Advisors →
          </button>
        </div>
      </div>

      {/* Bottom Marquee – GSAP Continuous */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-[#0B1F6A] py-3">
        <div
          ref={marqueeRef}
          className="flex items-center w-max text-white text-sm font-medium"
        >
          {/* First set */}
          <div className="flex items-center">
            <span className="mx-4">Market Research & Insights</span>
            <span className="w-1.5 h-1.5 bg-[#7B7BE2] rounded-full"></span>
            <span className="mx-4">Analytics & Data Firms</span>
            <span className="w-1.5 h-1.5 bg-[#7B7BE2] rounded-full"></span>
            <span className="mx-4">Healthcare & Health Technology</span>
            <span className="w-1.5 h-1.5 bg-[#7B7BE2] rounded-full "></span>
            <span className="mx-4">Fintech & Banking</span>
            <span className="w-1.5 h-1.5 bg-[#7B7BE2] rounded-full "></span>
            <span className="mx-4">Government & Public Sector</span>
            <span className="w-1.5 h-1.5 bg-[#7B7BE2] rounded-full "></span>
            <span className="mx-4">SaaS, Startups & Enterprises</span>
            <span className="w-1.5 h-1.5 bg-[#7B7BE2] rounded-full "></span>
            <span className="mx-4">Education & Institutional Platforms</span>
          </div>
          <span className="w-1.5 h-1.5 bg-[#7B7BE2] rounded-full "></span>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center">
            <span className="mx-4">Market Research & Insights</span>
            <span className="w-1.5 h-1.5 bg-[#7B7BE2] rounded-full "></span>
            <span className="mx-4">Analytics & Data Firms</span>
            <span className="w-1.5 h-1.5 bg-[#7B7BE2] rounded-full "></span>
            <span className="mx-4">Healthcare & Health Technology</span>
            <span className="w-1.5 h-1.5 bg-[#7B7BE2] rounded-full "></span>
            <span className="mx-4">Fintech & Banking</span>
            <span className="w-1.5 h-1.5 bg-[#7B7BE2] rounded-full "></span>
            <span className="mx-4">Government & Public Sector</span>
            <span className="w-1.5 h-1.5 bg-[#7B7BE2] rounded-full "></span>
            <span className="mx-4">SaaS, Startups & Enterprises</span>
            <span className="w-1.5 h-1.5 bg-[#7B7BE2] rounded-full "></span>
            <span className="mx-4">Education & Institutional Platforms</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
