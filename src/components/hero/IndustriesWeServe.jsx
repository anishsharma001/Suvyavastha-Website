import React, { useState } from "react";
import { industries } from "../../utils/data/industriesData";

const IndustriesWeServe = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // split data into two columns
  const leftColumn = industries.filter((_, i) => i % 2 === 0);
  const rightColumn = industries.filter((_, i) => i % 2 !== 0);

  const renderCard = (item, index) => {
    const realIndex = industries.indexOf(item);
    const isActive = activeIndex === realIndex;
    const Icon = item.icon;

    return (
      <div
        key={item.title}
        onClick={() =>
          setActiveIndex(isActive ? null : realIndex)
        }
        className={`
          cursor-pointer rounded-xl p-6 mb-6
          transition-all duration-300
          ${
            isActive
              ? "bg-[#5804BF] text-white"
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
            mt-4 text-sm leading-relaxed overflow-hidden
            transition-all duration-300 ease-in-out
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
  };

  return (
    <section
      id="industries"
      className="scroll-mt-24 bg-[#BDA3F3] bg-opacity-[20%] py-16 font-inter"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-[#2B2B2B]">
          Industries We Serve
        </h2>

        <p className="mt-2 text-sm text-[#3C3C3C] max-w-2xl">
          We work with industries where software reliability is not optional –
          systems that carry operational, financial, regulatory, or public trust
          responsibilities.
        </p>

        {/* Two independent columns */}
        <div className="mt-10 flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            {leftColumn.map(renderCard)}
          </div>
          <div className="flex-1">
            {rightColumn.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
