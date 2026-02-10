import React, { useState } from "react";
import { industries } from "../../utils/data/industriesData";

const IndustriesWeServe = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#BDA3F3] bg-opacity-[20%] py-16 font-inter">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-[#2B2B2B]">
          Industries We Serve
        </h2>
        <p className="mt-2 text-sm text-[#3C3C3C] max-w-2xl">
          We work with industries where software reliability is not optional—
          systems that carry operational, financial, regulatory, or public trust
          responsibilities.
        </p>

        {/* Grid */}
        <div
          className="
            mt-10 grid grid-cols-1 md:grid-cols-2 gap-6
            auto-rows-[80px]
          "
        >
          {industries.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeIndex === index;

            return (
              <div
                key={item.title}
                onClick={() => setActiveIndex(isActive ? null : index)}
                className={`
                  cursor-pointer rounded-xl p-6 transition-all duration-500 ease-in-out
                  ${
                    isActive
                      ? "bg-[#5804BF] text-white row-span-2"
                      : "bg-white text-[#5804BF]"
                  }
                `}
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? "text-white" : "text-[#5804BF]"
                    }`}
                  />
                  <span className="font-medium">
                    {item.title}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`
                    mt-4 text-sm leading-relaxed transition-all duration-500 ease-in-out
                    ${
                      isActive
                        ? "opacity-100 max-h-40"
                        : "opacity-0 max-h-0"
                    }
                  `}
                >
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
