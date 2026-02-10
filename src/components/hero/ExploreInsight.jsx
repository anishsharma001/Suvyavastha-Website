import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { insightPages } from "../../utils/data/exploreInsight";

const ExploreInsights = () => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const [page, setPage] = useState(0);

    const totalPages = insightPages.length;

    /* =========================
       Slide animation
    ========================= */
    const slideToPage = (index) => {
        if (!containerRef.current || !trackRef.current) return;

        const width = containerRef.current.clientWidth;
        trackRef.current.style.transform = `translateX(-${width * index}px)`;
        setPage(index);
    };

    /* =========================
       Smooth easing
    ========================= */
    useEffect(() => {
        if (trackRef.current) {
            trackRef.current.style.transition =
                "transform 600ms cubic-bezier(0.4, 0, 0.2, 1)";
        }
    }, []);

    return (
        <section id="blogs" className="scroll-mt-24 bg-[#BDA3F3] bg-opacity-[20%] py-16 font-inter">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex justify-between items-start gap-6">
                    <div>
                        <h2 className="text-2xl font-semibold text-[#2B2B2B]">
                            Explore Insights from SPTL
                        </h2>
                        <p className="mt-2 text-sm text-[#3C3C3C] max-w-md">
                            Thoughts and observations from building, operating, and maintaining
                            business-critical software systems.
                        </p>
                    </div>
                </div>

                {/* Progress Bar + Buttons */}
                <div className="w-full flex items-center gap-8 mt-4">
                    {/* Draggable progress line */}
                    <input
                        type="range"
                        min={0}
                        max={totalPages - 1}
                        step={1}
                        value={page}
                        onChange={(e) =>
                            slideToPage(Number(e.target.value))
                        }
                        style={{
                            "--progress": `${((page + 1) / totalPages) * 100}%`,
                        }}
                        className="progress-slider flex-1"
                    />

                    {/* Navigation Buttons */}
                    <div className="flex gap-2 shrink-0">
                        <button
                            onClick={() =>
                                slideToPage(Math.max(page - 1, 0))
                            }
                            className="w-9 h-9 rounded-full bg-white border flex items-center justify-center hover:bg-[#5804BF] hover:text-white transition"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>

                        <button
                            onClick={() =>
                                slideToPage(
                                    Math.min(page + 1, totalPages - 1)
                                )
                            }
                            className="w-9 h-9 rounded-full bg-white border flex items-center justify-center hover:bg-[#5804BF] hover:text-white transition"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>


                {/* Pages */}
                <div
                    ref={containerRef}
                    className="mt-8 overflow-hidden"
                >
                    {/* Sliding Track */}
                    <div
                        ref={trackRef}
                        className="flex"
                    >
                        {insightPages.map((pageData, i) => (
                            <div
                                key={i}
                                className="min-w-full grid grid-cols-2 grid-rows-2 gap-6"
                            >
                                <InsightCard {...pageData.large} large />
                                <InsightCard {...pageData.smallTop} />
                                <InsightCard {...pageData.smallBottom} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

const InsightCard = ({ category, title, image, meta, large }) => {
    return (
        <div
            className={`
        relative rounded-xl overflow-hidden text-white
        ${large ? "row-span-2 h-[380px]" : "h-[180px]"}
      `}
        >
            {/* Background image */}
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
            />

            {/* Dark overlay */}
            {/* <div className="absolute inset-0 bg-black/45" /> */}

            {/* Content */}
            <div className="relative z-10 p-5 h-full flex flex-col">
                {/* Top content */}
                <div>
                    <span className="text-xs opacity-80 block">
                        {category}
                    </span>

                    {/* Divider line */}
                    <div className="mt-2 h-[2px] w-28 bg-white/50 rounded-full" />

                    <h3 className="mt-3 text-sm font-medium leading-snug">
                        {title}
                    </h3>
                </div>

                {/* Meta bottom-right */}
                <div className="mt-auto flex justify-end">
                    <span className="text-xs opacity-80">
                        {meta}
                    </span>
                </div>
            </div>
        </div>
    );
};



export default ExploreInsights;
