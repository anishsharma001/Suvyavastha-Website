import React, { useState, useRef, useEffect } from "react";
import { services } from "../../utils/data/transformationService";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TransformationServices = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const titleRefs = useRef([]);
  const listRefs = useRef([]);

  // 🔥 FULL SECTION SCROLL ANIMATION
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
          descRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          titleRefs.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 🔥 LIST STAGGER ANIMATION (Accordion Open)
  useEffect(() => {
    if (activeIndex !== null) {
      const items = listRefs.current[activeIndex];

      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          }
        );
      }
    }
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="scroll-mt-24 w-full bg-[#BDA3F3] bg-opacity-[20%]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 2xl:px-10 py-16 font-inter">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-2xl font-semibold text-[#2B2B2B]"
        >
          Transformation Services
        </h2>

        {/* Description */}
        <p
          ref={descRef}
          className="mt-2 text-sm text-[#3C3C3C] max-w-2xl"
        >
          We help organizations design, build, operate, and scale software
          systems with long-term responsibility, not one-time delivery.
        </p>

        <div className="mt-10">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <div key={service.title} className="border-b pb-4">
                {/* Header */}
                <button
                  ref={(el) => (titleRefs.current[index] = el)}
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className={`
                    w-full flex items-center justify-between text-left 
                    font-medium text-[#2B2B2B] text-lg
                    p-4 rounded-md
                    transition-all duration-300
                    hover:bg-[#9e54f8] hover:text-white
                  `}
                >
                  <span>{service.title}</span>

                  <span
                    className={`text-2xl transition-transform duration-300 ${isActive ? "rotate-45" : ""
                      }`}
                  >
                    +
                  </span>
                </button>


                {/* Animated Content */}
                <div
                  className={`
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${isActive
                      ? "max-h-[700px] opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-2"
                    }
                  `}
                >
                  <div className="mt-4 bg-[#5804BF] rounded-lg p-6 flex flex-col md:flex-row gap-6">
                    {/* Left List */}
                    <div className="flex-1 text-white">
                      <ul className="space-y-5">
                        {service.items.map((item, i) => (
                          <li
                            key={item}
                            ref={(el) => {
                              if (!listRefs.current[index]) {
                                listRefs.current[index] = [];
                              }
                              listRefs.current[index][i] = el;
                            }}
                            className="flex gap-6 items-start"
                          >
                            <span className="opacity-80">
                              {(i + 1)
                                .toString()
                                .padStart(2, "0")}
                            </span>
                            <span className="font-medium">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1">
                      <div className="relative overflow-hidden rounded-md">
                        {!loadedImages[index] && (
                          <div className="absolute inset-0 bg-white/10 animate-pulse rounded-md" />
                        )}

                        <img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          onLoad={() =>
                            setLoadedImages((prev) => ({
                              ...prev,
                              [index]: true,
                            }))
                          }
                          className={`
                            w-full h-full max-h-[260px] object-cover rounded-md
                            transition-all duration-700 ease-out
                            ${loadedImages[index]
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-105"
                            }
                          `}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TransformationServices;
