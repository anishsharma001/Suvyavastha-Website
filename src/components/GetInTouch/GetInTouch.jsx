import { useState, useRef, useEffect } from "react";
import BusinessForm from "./BusinessForm";
import JobForm from "./JobForm";
import { jobImages } from "./jobImages.js";
import image1 from "../../assets/GetInTouch/image1.png";
import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GetInTouch = () => {
    const [tab, setTab] = useState("business");
    const [jobStep, setJobStep] = useState(0);

    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const tabsRef = useRef(null);
    const formRef = useRef(null);
    const imageRef = useRef(null);
    const bottomRef = useRef(null);

    /* =========================
       Scroll Reveal Animation
    ========================= */
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
                    tabsRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
                    "-=0.4"
                )
                .fromTo(
                    formRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
                    "-=0.3"
                )
                .fromTo(
                    imageRef.current,
                    { opacity: 0, scale: 1.05 },
                    { opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
                    "-=0.6"
                )
                .fromTo(
                    bottomRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
                    "-=0.4"
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    /* =========================
       Tab Change Animation
    ========================= */
    useEffect(() => {
        if (!formRef.current || !imageRef.current) return;

        gsap.fromTo(
            formRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );

        gsap.fromTo(
            imageRef.current,
            { opacity: 0, scale: 1.05 },
            { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
        );
    }, [tab, jobStep]);

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="scroll-mt-24 bg-white w-full"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10 2xl:px-10 py-16 font-inter">
                <h2
                    ref={headingRef}
                    className="text-xl font-semibold text-[#2B2B2B]"
                >
                    Get in Touch
                </h2>

                {/* Tabs */}
                <div
                    ref={tabsRef}
                    className="mt-6 flex gap-8 text-sm font-medium"
                >
                    <button
                        onClick={() => setTab("business")}
                        className="relative pb-2"
                    >
                        <span
                            className={
                                tab === "business"
                                    ? "text-[#5804BF]"
                                    : "text-gray-400 hover:text-[#9a51f3]"
                            }
                        >
                            Business / Project
                        </span>

                        {tab === "business" && (
                            <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-[#5804BF] rounded-full transition-all" />
                        )}
                    </button>

                    <button
                        onClick={() => setTab("job")}
                        className="relative pb-2"
                    >
                        <span
                            className={
                                tab === "job"
                                    ? "text-[#5804BF]"
                                    : "text-gray-400 hover:text-[#9a51f3]"
                            }
                        >
                            Job / Career Inquiry
                        </span>

                        {tab === "job" && (
                            <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-[#5804BF] rounded-full transition-all" />
                        )}
                    </button>
                </div>

                {/* Layout */}
                <div className="w-full mt-8 flex flex-col md:flex-row gap-10">
                    {/* LEFT: Form */}
                    <div
                        ref={formRef}
                        className="md:w-[60%] border-2 border-[#7A4DFF] rounded-xl p-6"
                    >
                        {tab === "business" ? (
                            <BusinessForm />
                        ) : (
                            <JobForm onStepChange={setJobStep} />
                        )}
                    </div>

                    {/* RIGHT: Image */}
                    <div className="md:w-[40%] hidden md:block">
                        <div className="h-full min-h-[520px]">
                            <img
                                ref={imageRef}
                                src={
                                    tab === "job"
                                        ? jobImages[jobStep]
                                        : image1
                                }
                                alt="Get in touch"
                                className="w-full h-full object-cover rounded-xl transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Contact Info */}
                <div
                    ref={bottomRef}
                    className="mt-4 text-sm text-[#2B2B2B]"
                >
                    <p className="mb-2">Or</p>

                    <p className="font-medium text-[#05129C]">
                        Prefer a direct conversation?
                    </p>

                    <div className="mt-2 flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:underline"
                        >
                            <FaWhatsapp className="w-4 h-4" />
                            <span>+91 98765 43210</span>
                        </a>

                        <a
                            href="mailto:info@suvyavastha.com"
                            className="flex items-center gap-2 hover:underline"
                        >
                            <Mail className="w-4 h-4" />
                            <span>info@suvyavastha.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;
