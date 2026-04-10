import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { team } from "../../utils/data/meetTheTeam";

gsap.registerPlugin(ScrollTrigger);

const MeetTheTeam = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, team.length);

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "restart none none reset",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 font-inter">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 2xl:px-0">
        
        <h2 className="text-2xl md:text-[26px] font-semibold text-[#2B2B2B] mb-10">
          Meet the People Behind Suvyavastha
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group bg-[#F8F8F8] rounded-xl border border-gray-200 p-6 text-center transition-all duration-500 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-full h-full object-cover
                    transition-all duration-500 ease-out
                    group-hover:scale-105 group-hover:-translate-y-1
                  "
                />

                {/* subtle overlay */}
                {/* <div className="
                  absolute inset-0 bg-black/0
                  group-hover:bg-black/10
                  transition-all duration-500
                " /> */}
              </div>

              {/* Name */}
              <h3 className="text-[15px] font-semibold text-[#2B2B2B] mt-4">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-[#2B2B2B] mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;