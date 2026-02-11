import React, { useRef, useEffect } from "react";
import { steps } from "../../utils/data/whatHappensNext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatHappensNext = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      });

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(
          cardRef.current,
          { opacity: 0, scale: 0.98 },
          { opacity: 1, scale: 1, duration: 0.7, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          stepRefs.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#BDA3F3] bg-opacity-[20%] py-16 font-inter"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 2xl:px-10">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-[24px] font-semibold text-[#3C3C3C] mb-6"
        >
          What Happens Next?
        </h2>

        {/* Card */}
        <div
          ref={cardRef}
          className="bg-white rounded-md p-10 flex justify-center gap-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                ref={(el) => (stepRefs.current[index] = el)}
                className="transition-all duration-300 hover:-translate-y-1"
              >
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
