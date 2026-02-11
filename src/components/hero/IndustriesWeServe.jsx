import React, { useState, useRef, useEffect } from "react";
import { industries } from "../../utils/data/industriesData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IndustriesWeServe = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef(null);
  const leftRefs = useRef([]);
  const rightRefs = useRef([]);

  // split data into two columns
  const leftColumn = industries.filter((_, i) => i % 2 === 0);
  const rightColumn = industries.filter((_, i) => i % 2 !== 0);

  // 🔥 Scroll Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        // 📱 Mobile: top to bottom reveal
        gsap.fromTo(
          [...leftRefs.current, ...rightRefs.current],
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "restart none none none",
            },
          }
        );
      } else {
        // 💻 Desktop: left & right slide in
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "restart none none none",
          },
        });

        tl.fromTo(
          leftRefs.current,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          }
        ).fromTo(
          rightRefs.current,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.8"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderCard = (item, realIndex, column, refArray, i) => {
    const isActive = activeIndex === realIndex;
    const Icon = item.icon;

    return (
      <div
        ref={(el) => (refArray.current[i] = el)}
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
              : "bg-white text-[#5804BF] hover:scale-105 transition"
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
      ref={sectionRef}
      id="industries"
      className="scroll-mt-24 bg-[#BDA3F3] bg-opacity-[20%] py-16 font-inter"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 2xl:px-10">
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
            {leftColumn.map((item, i) =>
              renderCard(
                item,
                industries.indexOf(item),
                "left",
                leftRefs,
                i
              )
            )}
          </div>

          <div className="flex-1">
            {rightColumn.map((item, i) =>
              renderCard(
                item,
                industries.indexOf(item),
                "right",
                rightRefs,
                i
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
