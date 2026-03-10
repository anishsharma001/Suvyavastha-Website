import React, { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgImage from "../../assets/aboutUs/decadeBg.png";

gsap.registerPlugin(ScrollTrigger);

const DecadeSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const dividerRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

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
        contentRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(
          dividerRef.current,
          { width: 0 },
          { width: 80, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          textRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          buttonRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[420px] flex items-center justify-center text-center font-inter"
    >
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Technology background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Blue Overlay */}
      {/* <div className="absolute inset-0 bg-[#071C80]/90"></div> */}

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 text-white">
        <h2
          ref={contentRef}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug"
        >
          Most vendors optimize for the demo.
          <br />
          We optimize for the decade.
        </h2>

        {/* Divider */}
        <div
          ref={dividerRef}
          className="h-[2px] bg-[#444DB5] mx-auto mt-4"
          style={{ width: 0 }}
        />

        {/* Paragraph */}
        <p
          ref={textRef}
          className="mt-6 text-sm md:text-base text-white leading-relaxed"
        >
          STPL is a long-term engineering execution partner – operating
          client-owned systems and accountable for reliability, continuity,
          and real-world system performance.
        </p>

        {/* Button */}
        <a
          href="mailto:info@suvyavastha.com"
          className="mt-8 inline-flex items-center gap-2 bg-white text-[#05129C] px-10 py-3 rounded-md text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Get In Touch
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default DecadeSection;