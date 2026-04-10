import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import teamImg from "../../assets/aboutUs/teamAbout.png";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ThoughtfulTechnology = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const captionRef = useRef(null);

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
          textRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          buttonRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          captionRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#fafafa] py-16 lg:py-24 font-inter "
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center lg:px-16 2xl:px-0">

        {/* LEFT CONTENT */}
        <div>
          <h2
            ref={headingRef}
            className="text-3xl lg:text-4xl font-semibold text-[#2B2B2B] leading-snug"
          >
            A Thoughtful Approach to Technology
          </h2>

          {/* Accent line */}
          <div className="w-32 h-[2px] bg-[#5804BF] mt-4 mb-5"></div>

          <p
            ref={textRef}
            className="text-sm lg:text-base text-[#3C3C3C] max-w-md"
          >
            We build <span className="font-semibold">digital systems</span> for
            organizations that value clarity, reliability, and long-term
            thinking.
          </p>

          <a
            ref={buttonRef}
            href="mailto:info@suvyavastha.com"
            className="mt-8 inline-flex items-center gap-2 text-white bg-[#05129C] px-10 py-3 rounded-md text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Connect with us
            <ArrowRight size={16} />
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full">
          <div className="overflow-hidden rounded-lg">
            <img
              ref={imageRef}
              src={teamImg}
              alt="Team discussion"
              className="w-full h-[260px] md:h-[320px] object-cover"
            />
          </div>

          <p
            ref={captionRef}
            className="text-sm text-[#3C3C3C] mt-4 max-w-lg"
          >
            Our work combines{" "}
            <span className="font-semibold">
              business understanding, human behavior, and disciplined system
              design
            </span>{" "}
            to create products that endure.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ThoughtfulTechnology;