import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import indiaFlag from "../../assets/flag/indiaFlag.png";

const OfficeLocation = () => {
    return (
        <section className="w-full py-12 font-inter bg-[#F8F8F8]">
            <div className="max-w-7xl mx-auto px-6 md:px-10 2xl:px-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">

                    {/* LEFT: Address */}
                    <div className="w-full md:w-[4  0%] space-y-5 text-sm text-[#2B2B2B]">
                        {/* Country */}
                        <div className="flex items-center gap-2 font-medium">
                            <img src={indiaFlag} alt="India Flag" className="w-6 h-4 rounded-sm object-cover" />
                            <span>India</span>
                        </div>

                        {/* Address */}
                        <div className="leading-relaxed text-[#2B2B2B]">
                            Office No. – 202, A-1<br />
                            Sector 59, Noida, Gautam Buddha Nagar,<br />
                            Uttar Pradesh, India, 201301.
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-3 hover:text-[#5804BF] transition">
                            <a
                                href="tel:+910123456789"
                                className="flex items-center gap-3 hover:underline"
                            >
                                <Phone className="w-4 h-4" />
                                <span>+91 01234 56789</span>
                            </a>
                        </div>


                        {/* Email */}
                        <div className="flex items-center gap-3 hover:text-[#5804BF] transition">
                            <a
                                href="mailto:info@suvyavastha.com"
                                className="flex items-center gap-3 hover:underline"
                            >
                                <Mail className="w-4 h-4 " />
                                <span>info@suvyavastha.com</span>
                            </a>
                        </div>

                    </div>

                    {/* RIGHT: Map */}
                    <div className="w-full md:w-[60%] h-[260px] sm:h-[320px] rounded-lg overflow-hidden border">
                        <iframe
                            title="Suvyavastha Technologies Location"
                            src="https://www.google.com/maps?q=Suvyavastha%20Technologies%20Pvt.%20Ltd.%2C%20Sector%2059%2C%20Noida&output=embed"
                            className="w-full h-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OfficeLocation;
