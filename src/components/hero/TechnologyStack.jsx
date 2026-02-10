import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { techStack } from "../../utils/data/techIcons";

const TechnologyStack = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    // duplicate content for seamless loop
    const items = track.children;
    const totalWidth = track.scrollWidth / 2;

    gsap.set(track, { x: 0 });

    gsap.to(track, {
      x: -totalWidth,
      duration: 40, // ⬅️ speed (lower = faster)
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section id="tech" className="scroll-mt-24 bg-white w-full py-10">
      <div className="max-w-7xl mx-auto px-6 py-16 font-inter">
        <h2 className="text-xl font-semibold text-gray-900">
          Technology Stack & Platforms
        </h2>
        <p className="mt-2 text-sm text-gray-600 max-w-2xl">
          Proven technologies chosen for reliability, scale, and long-term system
          performance.
        </p>

        <div className="mt-8 overflow-hidden">
          <div
            ref={trackRef}
            className="flex w-max"
          >
            {/* first set */}
            {techStack.map((tech, i) => (
              <TechIcon key={i} {...tech} />
            ))}
            {/* duplicate set */}
            {techStack.map((tech, i) => (
              <TechIcon key={`dup-${i}`} {...tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TechIcon = ({ label, icon }) => (
  <div className="mx-6 flex-shrink-0 flex flex-col items-center">
    <div className="w-14 h-14 rounded-xl bg-white border flex items-center justify-center shadow-sm">
      <img
        src={icon}
        alt={label}
        className="w-7 h-7 object-contain"
        loading="lazy"
      />
    </div>
    <span className="mt-2 text-xs text-gray-700 text-center">
      {label}
    </span>
  </div>
);


export default TechnologyStack;
