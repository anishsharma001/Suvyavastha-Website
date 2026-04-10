import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MissionVision = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "restart none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-14 font-inter"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:px-16 2xl:px-0">

        {/* Mission */}
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="max-w-md"
        >
          <h3 className="text-lg font-semibold text-[#2B2B2B]">
            Mission
          </h3>

          {/* <div className="w-16 h-[2px] bg-[#5804BF] mt-3 mb-4"></div> */}

          <p className="text-sm text-[#3C3C3C] leading-relaxed">
            To be a long-term engineering partner, ensuring the reliability,
            continuity, and accountability of business-critical software
            systems throughout their lifecycle.
          </p>
        </div>

        {/* Vision */}
        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className="max-w-md"
        >
          <h3 className="text-lg font-semibold text-[#2B2B2B]">
            Vision
          </h3>

          {/* <div className="w-16 h-[2px] bg-[#5804BF] mt-3 mb-4"></div> */}

          <p className="text-sm text-[#3C3C3C] leading-relaxed">
            To be the go-to partner for organizations that cannot afford
            uncertainty in their software systems, delivering systems that
            matter and endure.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;