import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import teamImage from "../../assets/aboutUs/groupBelieve.png";
import { beliefs } from "../../utils/data/whatWebelieve";

gsap.registerPlugin(ScrollTrigger);

const WhatWeBelieve = () => {
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);
    const imageRef = useRef(null);
    const textRef = useRef(null);

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
                textRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.8 }
            )
                .fromTo(
                    cardRefs.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, stagger: 0.15, duration: 0.7 },
                    "-=0.4"
                )
                .fromTo(
                    imageRef.current,
                    { opacity: 0, scale: 1.05 },
                    { opacity: 1, scale: 1, duration: 1 },
                    "-=0.6"
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-[#BDA3F3] bg-opacity-[20%] py-16 lg:py-24 font-inter"
        >
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* LEFT SIDE */}
                <div>
                    <div ref={textRef}>
                        <h2 className="text-2xl font-semibold text-[#2B2B2B]">
                            What We Believe
                        </h2>

                        <p className="text-sm text-[#3C3C3C] mt-3 max-w-md">
                            Most vendors optimize for the demo. We optimize for the decade.
                            <br />
                            We focus on what happens after delivery.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="mt-8 space-y-5">
                        {beliefs.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    ref={(el) => (cardRefs.current[index] = el)}
                                    className={`
                                            flex flex-col p-8 rounded-lg transition-all duration-300
                                            ${item.active
                                            ? "bg-gradient-to-r from-[#5A09C7] to-[#6A1BDB] text-white"
                                            : "bg-white text-[#5804BF] hover:shadow-lg"
                                        }
                                    `}
                                >
                                    <div className="flex items-center gap-4">
                                        <Icon className={`size-8 ${item.active ? "text-white" : "text-[#5804BF]"}`} />
                                        <h3 className="font-medium text-lg">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className={`w-40 h-[1.5px]  ${item.active ? "bg-[#444DB5]" : "bg-[#e5e5e7]"} my-3`}></div>
                                    <div>
                                        <p
                                            className={`text-sm mt-2 font-medium ${item.active
                                                ? "text-white"
                                                : "text-[#5804BF]"
                                                }`}
                                        >
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div>
                    <img
                        ref={imageRef}
                        src={teamImage}
                        alt="Team collaboration"
                        className="rounded-xl w-full h-[320px] lg:h-full object-cover"
                    />
                </div>

            </div>
        </section>
    );
};

export default WhatWeBelieve;