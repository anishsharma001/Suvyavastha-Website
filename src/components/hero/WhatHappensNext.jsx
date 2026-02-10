import React from "react";
import { steps } from "../../utils/data/WhatHappensNext";

const WhatHappensNext = () => {
  return (
    <section className="bg-[#BDA3F3] bg-opacity-[20%] py-16 font-inter">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-[24px] font-semibold text-[#3C3C3C] mb-6">
          What Happens Next?
        </h2>

        {/* Card */}
        <div className="bg-white rounded-md p-10 flex justify-center gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number}>
                <p className="text-[24px] text-[#3C3C3C] font-medium">
                  {step.number}
                </p>

                <h3 className="mt-2 text-[21px] font-semibold text-[#5804BF]">
                  {step.title}
                </h3>

                <p className="mt-2 font-normal text-sm text-[#3C3C3C] max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatHappensNext;
