import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

const steps = [
  { label: "Ideation", content: ["Goals", "Constraints", "Success criteria"] },
  { label: "Discussion", content: ["Stakeholders", "Feasibility", "Expectations"] },
  { label: "Strategy", content: ["Roadmap", "Milestones", "Tech stack"] },
  { label: "Agile Build", content: ["Sprints", "Iterations", "Testing"] },
  { label: "Feedback", content: ["User input", "Improvements", "Validation"] },
  { label: "Launch", content: ["Deployment", "Monitoring", "Go-live"] },
  { label: "Operate", content: ["Maintenance", "Scaling", "Support"] },
];

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
          className="grid gap-y-4 min-w-[1100px]"
          style={{
            gridTemplateColumns: `repeat(${steps.length * 2 - 1}, minmax(80px, 1fr))`,
          }}
        >
          {/* Row 1: Steps + Arrows */}
          {steps.map((step, index) => (
            <React.Fragment key={step.label}>
              {/* Step */}
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

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="flex items-center justify-center text-black text-base font-bold">
                  <ArrowRight className="w-4 h-4"/>
                </div>
              )}
            </React.Fragment>
          ))}

          {/* Row 2: Parallel Content */}
          {steps.map((step, index) => (
            <React.Fragment key={step.label}>
              {/* Content */}
              <div className="flex justify-center items-center">
                {activeIndex === index && (
                  <div className="flex flex-col gap-2 justify-center">
                    {step.content.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-[#7A26E1] text-white text-nowrap"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Empty cell for arrow column */}
              {index < steps.length - 1 && <div />}
            </React.Fragment>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default ExecutionProcess;
