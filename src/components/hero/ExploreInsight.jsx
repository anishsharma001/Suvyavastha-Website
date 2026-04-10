import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { blogs } from "../../utils/data/blogs";

const ExploreInsights = () => {

    const navigate = useNavigate();

    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const [page, setPage] = useState(0);

    const totalPages = 1; // only one page needed because 3 blogs

    const slideToPage = (index) => {
        if (!containerRef.current || !trackRef.current) return;

        const width = containerRef.current.clientWidth;
        trackRef.current.style.transform = `translateX(-${width * index}px)`;
        setPage(index);
    };

    useEffect(() => {
        if (trackRef.current) {
            trackRef.current.style.transition =
                "transform 600ms cubic-bezier(0.4, 0, 0.2, 1)";
        }
    }, []);

    const largeBlog = blogs[0];
    const smallTop = blogs[1];
    const smallBottom = blogs[2];

    return (
        <section id="blogs" className="scroll-mt-24 bg-[#BDA3F3] bg-opacity-[20%] py-16 font-inter">

            <div className="max-w-7xl mx-auto px-6 lg:px-16 2xl:px-0">

                {/* Header */}
                <div>
                    <h2 className="text-2xl font-semibold text-[#2B2B2B]">
                        Explore Insights from SPTL
                    </h2>

                    <p className="mt-2 text-sm text-[#3C3C3C] max-w-md">
                        Thoughts and observations from building, operating, and maintaining
                        business-critical software systems.
                    </p>
                </div>

                {/* Progress */}
                <div className="w-full flex items-center gap-8 mt-4">

                    <input
                        type="range"
                        min={0}
                        max={0}
                        value={0}
                        className="progress-slider flex-1"
                        readOnly
                    />

                    <div className="flex gap-2 shrink-0">
                        <button className="w-9 h-9 rounded-full bg-white border flex items-center justify-center">
                            <ChevronLeft className="w-4 h-4" />
                        </button>

                        <button className="w-9 h-9 rounded-full bg-white border flex items-center justify-center">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                </div>

                {/* Cards */}
                <div ref={containerRef} className="mt-8 overflow-hidden">

                    <div ref={trackRef} className="flex">

                        <div className="min-w-full grid grid-cols-2 grid-rows-2 gap-6">

                            <InsightCard
                                {...largeBlog}
                                large
                                onClick={() => navigate(`/blogs/${largeBlog.slug}`)}
                            />

                            <InsightCard
                                {...smallTop}
                                onClick={() => navigate(`/blogs/${smallTop.slug}`)}
                            />

                            <InsightCard
                                {...smallBottom}
                                onClick={() => navigate(`/blogs/${smallBottom.slug}`)}
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

const InsightCard = ({ category, title, image, meta, large, onClick }) => {

    return (
        <div
            onClick={onClick}
            className={`
            relative rounded-xl overflow-hidden text-white group cursor-pointer
            ${large ? "row-span-2 h-[380px]" : "h-[180px]"}
        `}
        >

            <img
                src={image}
                alt={title}
                className="
                    absolute inset-0 w-full h-full object-cover
                    transition-all duration-700
                    group-hover:scale-110
                "
            />

            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <div className="relative z-10 p-5 h-full flex flex-col">

                <div>
                    <span className="text-xs opacity-80 block">
                        {category}
                    </span>

                    <div className="mt-2 h-[2px] w-28 bg-white/60 rounded-full" />

                    <h3 className="mt-3 text-sm font-medium leading-snug">
                        {title}
                    </h3>
                </div>

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
