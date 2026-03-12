import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import shubham from "../../assets/team/shubham.png";
import anish from "../../assets/team/anish.png";
import swati from "../../assets/team/swati.png";

gsap.registerPlugin(ScrollTrigger);

const team = [
     {
        name: "Anish Sharma",
        role: "Director",
        image: anish,
    },
    {
        name: "Shubham Sharma",
        role: "Director",
        image: shubham,
    },
    {
        name: "Swati Pokhariyal",
        role: "HR Manager",
        image: swati,
    },
];

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
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                },
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="bg-white py-16 font-inter">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-2xl md:text-[26px] font-semibold text-[#2B2B2B] mb-10">
                    Meet the People Behind Suvyavastha
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {team.map((member, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="bg-[#F8F8F8] rounded-xl border border-gray-200 p-8 text-center transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
                        >
                            {/* Image */}
                            <div className="flex items-center justify-center overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Name */}
                            <h3 className="text-[15px] font-semibold text-[#2B2B2B]">
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