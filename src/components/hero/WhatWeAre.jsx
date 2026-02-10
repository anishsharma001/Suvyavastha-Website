import React from "react";
import teamImage from "../../assets/GroupImg/groupImg.png"

const WhatWeAre = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 font-inter">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-[#2B2B2B]">
        What We Are
      </h2>

      <p className="mt-3 text-[#3C3C3C] text-sm font-normal max-w-xl leading-relaxed">
        Most vendors optimize for the demo. We optimize for the decade.
        <br />
        We focus on what happens after delivery.
      </p>

      {/* Highlight line */}
      <p className="mt-6 text-sm text-[#2B2B2B] font-semibold">
        STPL is a long-term engineering execution partner – operating
        client-owned systems and accountable for:
      </p>

      {/* Pills */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="px-5 py-2 lg:min-w-[200px] rounded-md bg-[#5804BF] text-white text-sm font-medium">
          Reliability & uptime
        </span>

        <span className="text-[#7B7BE2]">•</span>

        <span className="px-5 py-2 lg:min-w-[200px] rounded-md bg-[#5804BF] text-white text-sm font-medium">
          Continuity & data integrity
        </span>

        <span className="text-[#7B7BE2]">•</span>

        <span className="px-5 py-2 lg:min-w-[200px] rounded-md bg-[#5804BF] text-white text-sm font-medium">
          Real-world system performance
        </span>
      </div>

      {/* Image */}
      <div className="mt-10">
        <img
          src={teamImage}
          alt="Team"
          className="w-full rounded-md object-cover"
        />
      </div>
      </div>
    </section>
  );
};

export default WhatWeAre;
