import React, { useState } from "react";
import { services } from "../../utils/data/transformationService";

const TransformationServices = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  return (
    <section className="w-full bg-[#BDA3F3] bg-opacity-[20%]">
      <div className="max-w-7xl mx-auto px-6 py-16 font-inter">
        <h2 className="text-2xl font-semibold text-[#2B2B2B]">
          Transformation Services
        </h2>
        <p className="mt-2 text-sm text-[#3C3C3C] max-w-2xl">
          We help organizations design, build, operate, and scale software systems
          with long-term responsibility, not one-time delivery.
        </p>

        <div className="mt-10 space-y-6">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <div key={service.title} className="border-b pb-4">
                {/* Header */}
                <button
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="w-full flex items-center justify-between text-left font-medium text-[#2B2B2B] text-lg"
                >
                  <span>{service.title}</span>
                  <span
                    className={`text-2xl transition-transform duration-300 ${isActive ? "rotate-45" : ""
                      }`}
                  >
                    +
                  </span>
                </button>

                {/* Animated Content */}
                <div
                  className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${isActive
                      ? "max-h-[700px] opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-2"
                    }
                `}
                >
                  <div className="mt-4 bg-[#5804BF] rounded-lg p-6 flex flex-col md:flex-row gap-6">
                    {/* Left List */}
                    <div className="flex-1 text-white">
                      <ul className="space-y-5">
                        {service.items.map((item, i) => (
                          <li key={item} className="flex gap-6 items-start">
                            <span className="opacity-80">
                              {(i + 1).toString().padStart(2, "0")}
                            </span>
                            <span className="font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1">
                      <div className="relative overflow-hidden rounded-md">
                        {/* Placeholder */}
                        {!loadedImages[index] && (
                          <div className="absolute inset-0 bg-white/10 animate-pulse rounded-md" />
                        )}

                        <img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          onLoad={() =>
                            setLoadedImages((prev) => ({
                              ...prev,
                              [index]: true,
                            }))
                          }
                          className={`
                          w-full h-full max-h-[260px] object-cover rounded-md
                          transition-all duration-700 ease-out
                          ${loadedImages[index]
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-105"
                            }
                        `}
                        />
                      </div>
                    </div>
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

export default TransformationServices;
