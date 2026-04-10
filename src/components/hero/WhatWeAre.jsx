import React, { useRef, useEffect } from "react";
import teamImage from "../../assets/GroupImg/groupImg.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatWeAre = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const highlightRef = useRef(null);
  const pillsWrapperRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "bottom 60%",
          toggleActions: "restart none none reset",
        },
      });

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
        }
      )
        .fromTo(
          paraRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .fromTo(
          highlightRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .fromTo(
          pillsWrapperRef.current?.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.4"
        )
        // 🔥 Fixed Image Animation
        .fromTo(
          imageRef.current,
          { opacity: 0, y: 40, scale: 1.05 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: "power2.out",
            clearProps: "transform",
          },
          "-=0.6"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="company"
      className="scroll-mt-24 w-full bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 2xl:px-0 py-16 font-inter">

        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-2xl font-semibold text-[#2B2B2B]"
        >
          What We Are
        </h2>

        {/* Description */}
        <p
          ref={paraRef}
          className="mt-3 text-[#3C3C3C] text-sm font-normal max-w-xl leading-relaxed"
        >
          Most vendors optimize for the demo. We optimize for the decade.
          <br />
          We focus on what happens after delivery.
        </p>

        {/* Highlight */}
        <p
          ref={highlightRef}
          className="mt-6 text-sm text-[#2B2B2B] font-semibold"
        >
          STPL is a long-term engineering execution partner – operating
          client-owned systems and accountable for:
        </p>

        {/* Pills */}
        <div
          ref={pillsWrapperRef}
          className="mt-6 flex flex-wrap items-center gap-3"
        >
          {[
            "Reliability & uptime",
            "Continuity & data integrity",
            "Real-world system performance",
          ].map((text, index) => (
            <React.Fragment key={text}>
              <span className="px-5 py-2 lg:min-w-[200px] rounded-md bg-[#5804BF] text-white text-sm font-medium">
                {text}
              </span>

              {index < 2 && (
                <span className="text-[#7B7BE2] hidden md:block">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* 🔥 Premium Image Hover */}
        <div className="mt-10 overflow-hidden rounded-md cursor-pointer group">
          <div className="overflow-hidden rounded-md">
            <img
              ref={imageRef}
              src={teamImage}
              alt="Team"
              className="
                w-full object-cover will-change-transform
                transition-all duration-700 ease-out
                group-hover:scale-105 group-hover:-translate-y-2
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeAre;