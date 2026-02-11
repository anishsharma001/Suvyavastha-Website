import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sections } from "../../utils/data/serviceSitemap";

const ServiceSitemap = () => {
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  /* =========================
     Responsive items per page
  ========================= */
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(4);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalPages = Math.ceil(sections.length / itemsPerPage);

  /* =========================
     Slide animation
  ========================= */
  const slideToPage = (index) => {
    if (!trackRef.current || !containerRef.current) return;

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
    <section className="py-16 font-inter bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 2xl:px-10">
        {/* Header */}
        <h2 className="text-lg font-semibold text-[#2B2B2B]">
          Service Sitemap
        </h2>
        <p className="mt-1 text-sm text-[#3C3C3C]">
          Quick links to all engineering and delivery capabilities.
        </p>

        {/* Slider + Buttons */}
        <div className="mt-6 flex items-center gap-6">
          <input
            type="range"
            min={0}
            max={totalPages - 1}
            step={1}
            value={page}
            onChange={(e) => slideToPage(Number(e.target.value))}
            style={{
              "--progress": `${((page + 1) / totalPages) * 100}%`,
            }}
            className="progress-slider flex-1"
          />

          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => slideToPage(Math.max(page - 1, 0))}
              className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-[#5804BF] hover:text-white transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() =>
                slideToPage(Math.min(page + 1, totalPages - 1))
              }
              className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-[#5804BF] hover:text-white transition"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Viewport */}
        <div ref={containerRef} className="mt-8 overflow-hidden">
          {/* Track */}
          <div ref={trackRef} className="flex">
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="w-full shrink-0 grid gap-12"
                style={{
                  gridTemplateColumns: `repeat(${itemsPerPage}, minmax(0, 1fr))`,
                }}
              >
                {sections
                  .slice(
                    pageIndex * itemsPerPage,
                    pageIndex * itemsPerPage + itemsPerPage
                  )
                  .map((section) => (
                    <div key={section.title}>
                      <h3 className="font-medium text-sm text-[#2B2B2B] mb-3">
                        {section.title}
                      </h3>

                      <ul className="space-y-2 text-sm text-[#3C3C3C]">
                        {section.items.map((item) => (
                          <li
                            key={item}
                            className="hover:text-[#5804BF] cursor-pointer"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSitemap;
