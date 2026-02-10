import { useState } from "react";
import BusinessForm from "./BusinessForm";
import JobForm from "./JobForm";
import { jobImages } from "./jobImages.js";
import image1 from "../../assets/GetInTouch/image1.png";
import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const GetInTouch = () => {
    const [tab, setTab] = useState("business");
    const [jobStep, setJobStep] = useState(0);

    return (
        <section className="bg-white w-full">
            <div className="max-w-7xl mx-auto px-6 py-16 font-inter">
                <h2 className="text-xl font-semibold text-[#2B2B2B]">
                    Get in Touch
                </h2>

                {/* Tabs */}
                <div className="mt-6 flex gap-8 text-sm font-medium">
                    {/* Business Tab */}
                    <button
                        onClick={() => setTab("business")}
                        className="relative pb-2"
                    >
                        <span
                            className={
                                tab === "business"
                                    ? "text-[#5804BF]"
                                    : "text-gray-400"
                            }
                        >
                            Business / Project
                        </span>

                        {tab === "business" && (
                            <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-[#5804BF] rounded-full transition-all" />
                        )}
                    </button>

                    {/* Job Tab */}
                    <button
                        onClick={() => setTab("job")}
                        className="relative pb-2"
                    >
                        <span
                            className={
                                tab === "job"
                                    ? "text-[#5804BF]"
                                    : "text-gray-400"
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
                    <div className="md:w-[60%] border-2 border-[#7A4DFF] rounded-xl p-6">
                        {tab === "business" ? (
                            <BusinessForm />
                        ) : (
                            <JobForm onStepChange={setJobStep} />
                        )}
                    </div>

                    {/* RIGHT: Image (changes per step) */}
                    <div className="md:w-[40%] hidden md:block">
                        <div className="h-full min-h-[520px]">
                            <img
                                src={tab === "job" ? jobImages[jobStep] : image1}
                                alt="Get in touch"
                                className="w-full h-full object-cover rounded-xl transition-opacity duration-300"
                            />
                        </div>
                    </div>

                </div>

                {/* Bottom Contact Info */}
                <div className="mt-4 text-sm text-[#2B2B2B]">
                    <p className="mb-2">Or</p>

                    <p className="font-medium text-[#05129C]">
                        Prefer a direct conversation?
                    </p>

                    <div className="mt-2 flex flex-col sm:flex-row gap-4">
                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:underline"
                        >
                            <FaWhatsapp className="w-4 h-4 text-[#2B2B2B]" />
                            <span>+91 98765 43210</span>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:info@suvyavastha.com"
                            className="flex items-center gap-2 hover:underline"
                        >
                            <Mail className="w-4 h-4 text-[#2B2B2B]" />
                            <span>info@suvyavastha.com</span>
                        </a>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default GetInTouch;
