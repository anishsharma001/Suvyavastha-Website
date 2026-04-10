import React, { useState, useRef, useEffect } from "react";
import { industries } from "../../utils/data/industriesData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IndustriesWeServe = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const leftColumn = industries.filter((_, i) => i % 2 === 0);
  const rightColumn = industries.filter((_, i) => i % 2 !== 0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const leftCards = cardRefs.current.slice(0, leftColumn.length);
      const rightCards = cardRefs.current.slice(leftColumn.length);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "restart none none reset",
        },
      });

      // 🧠 animate row by row (left + right together)
      leftCards.forEach((leftEl, i) => {
        const rightEl = rightCards[i];

        tl.fromTo(
          [leftEl, rightEl].filter(Boolean), // safe check
          {
            opacity: 0,
            y: 50,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: "power2.out",
          },
          i === 0 ? 0 : "-=0.8" // overlap for smooth flow
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderCard = (item, realIndex, i) => {
    const isActive = activeIndex === realIndex;
    const Icon = item.icon;

    return (
      <div
        ref={(el) => (cardRefs.current[i] = el)}
        key={item.title}
        onClick={() =>
          setActiveIndex(isActive ? null : realIndex)
        }
        className={`
          cursor-pointer rounded-xl p-6 mb-6
          transition-all duration-300
          ${isActive
            ? "bg-[#5804BF] text-white"
            : "bg-white text-[#5804BF] hover:scale-[1.02]"
          }
        `}
      >
        <div className="flex items-center gap-3">
          <Icon
            className={`size-8 ${isActive ? "text-white" : "text-[#5804BF]"
              }`}
          />
          <span className="text-lg font-medium">
            {item.title}
          </span>
        </div>

        <div
          className={`
            mt-4 text-sm leading-relaxed overflow-hidden
            transition-all duration-300 ease-in-out
            ${isActive
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
      <div className="max-w-7xl mx-auto px-6 lg:px-16 2xl:px-0">
        <h2 className="text-2xl font-semibold text-[#2B2B2B]">
          Industries We Serve
        </h2>

        <p className="mt-2 text-sm text-[#3C3C3C] max-w-2xl">
          We work with industries where software reliability is not optional –
          systems that carry operational, financial, regulatory, or public trust
          responsibilities.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            {leftColumn.map((item, i) =>
              renderCard(item, industries.indexOf(item), i)
            )}
          </div>

          <div className="flex-1">
            {rightColumn.map((item, i) =>
              renderCard(
                item,
                industries.indexOf(item),
                i + leftColumn.length // important
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;