import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cards } from "../../utils/data/aboutSuvyavastha";
gsap.registerPlugin(ScrollTrigger);

const AboutSuvyavastha = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const textRef = useRef(null);
    const cardsRef = useRef([]);

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
                    cardsRef.current,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power3.out",
                    },
                    "-=0.4"
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-[#BDA3F3] bg-opacity-[20%] py-16 lg:py-24 font-inter"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="max-w-3xl">
                    <h2
                        ref={headingRef}
                        className="text-3xl lg:text-4xl font-semibold text-[#2B2B2B]"
                    >
                        About <br />
                        <span className="font-semibold">
                            Suvyavastha Technologies
                        </span>
                    </h2>

                    {/* underline */}
                    <div className="w-40 h-[2px] bg-[#9844FF] mt-4 mb-6"></div>

                    {/* Description */}
                    <div
                        ref={textRef}
                        className="text-base font-medium text-[#161D2D] leading-relaxed space-y-3"
                    >
                        <p>
                            Suvyavastha Technologies Pvt. Ltd. is a systems engineering and
                            technology execution company built for organizations where
                            software reliability, continuity, and accountability are
                            non-negotiable.
                        </p>

                        <p>
                            We partner with enterprises, public institutions, and scaling
                            technology companies to design, build, operate, and evolve
                            software systems that must perform consistently under real-world
                            constraints. Our work extends beyond delivery, taking
                            responsibility for how systems behave after launch, with real
                            users, real data, and real operational pressures.
                        </p>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    {cards.map((card, index) => {
                        const Icon = card.icon;

                        return (
                            <div
                                key={card.title}
                                ref={(el) => (cardsRef.current[index] = el)}
                                className="
                                bg-gradient-to-r from-[#5C11C7] to-[#6B1AE6]
                                rounded-xl p-6 text-white
                                transition-all duration-300
                                hover:-translate-y-1 hover:shadow-xl
                                "
                            >
                                <div className="flex flex-col items-start">

                                    <div className="flex gap-4 items-center">
                                        <Icon className="size-10 mt-1 opacity-90" />
                                        <h3 className="font-semibold text-lg">
                                            {card.title}
                                        </h3>
                                    </div>

                                    {/* underline */}
                                    <div className="w-40 h-[1px] bg-[#444DB5] my-2"></div>

                                    <div>
                                        <p className="text-base mt-2 text-white leading-relaxed">
                                            {card.text}
                                        </p>
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

export default AboutSuvyavastha;