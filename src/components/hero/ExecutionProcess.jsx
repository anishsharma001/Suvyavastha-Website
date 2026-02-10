import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { steps } from "../../utils/data/executionProcess";

const ExecutionProcess = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="execution" className="scroll-mt-24 w-full bg-white">
      <div className="max-w-7xl mx-auto px-3 py-16 font-inter">
        {/* Heading */}
        <h2 className="text-xl font-semibold text-[#2B2B2B]">
          Our Execution Process
        </h2>
        <p className="mt-2 text-sm text-[#3C3C3C] max-w-xl">
          We follow a system-led engineering process focused on long-term execution
          rather than one-time delivery.
        </p>

        {/* Process Grid */}
        <div className="mt-10 overflow-x-auto px-5">
          <div
            className="grid gap-y-6 min-w-[1100px]"
            style={{
              gridTemplateColumns: `repeat(${steps.length * 2 - 1}, minmax(80px, 1fr))`,
            }}
          >
            {/* Row 1: Steps */}
            {steps.map((step, index) => (
              <React.Fragment key={step.label}>
                <div
                  className="flex justify-center"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <span
                    className={`px-5 py-2 rounded-lg border-2 text-base font-medium transition whitespace-nowrap cursor-pointer
                      ${
                        activeIndex === index
                          ? "bg-[#5804BF] border-[#5804BF] text-white"
                          : "border-[#9844FF] text-[#9844FF] hover:bg-[#9844FF] hover:text-white"
                      }
                    `}
                  >
                    {step.label}
                  </span>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-black" />
                  </div>
                )}
              </React.Fragment>
            ))}

            {/* Row 2: Icon / Content (fixed height, no shift) */}
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeIndex === index;

              return (
                <React.Fragment key={step.label}>
                  <div className="flex justify-center">
                    <div className="h-[100px] flex items-center justify-center">
                      {!isActive ? (
                        <Icon className="w-6 h-6 text-[#9844FF]" />
                      ) : (
                        <div className="flex flex-col gap-2">
                          {step.content.map((item) => (
                            <span
                              key={item}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-[#7A26E1] text-white whitespace-nowrap"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {index < steps.length - 1 && <div />}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutionProcess;
