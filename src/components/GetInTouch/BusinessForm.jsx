import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const BusinessForm = () => {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const update = (field, value) => {
        setData((prev) => ({ ...prev, [field]: value }));
    };

    const isOnlySpaces = (value) => !value || value.trim() === "";

    const validate = () => {
        let e = {};

        // First Name
        if (isOnlySpaces(data.firstName)) {
            e.firstName = "First name is required.";
        }

        // Last Name
        if (isOnlySpaces(data.lastName)) {
            e.lastName = "Last name is required.";
        }

        // Company (optional but not only numbers)
        if (data.company && /^\d+$/.test(data.company.trim())) {
            e.company = "Company name cannot be only numbers.";
        }

        // Email
        if (isOnlySpaces(data.email)) {
            e.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            e.email = "Enter a valid email address.";
        }

        // Contact
        if (!data.contact) {
            e.contact = "Contact number is required.";
        } else if (!/^\d{8,15}$/.test(data.contact.replace(/\D/g, ""))) {
            e.contact = "Enter a valid contact number (8-15 digits).";
        }

        // Service
        if (!data.service) {
            e.service = "Please select a service.";
        }

        // Other Service
        if (data.service === "Other" && isOnlySpaces(data.otherService)) {
            e.otherService = "Please specify the service.";
        }

        // Message
        if (isOnlySpaces(data.message)) {
            e.message = "Project description is required.";
        }

        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const submit = async () => {
        if (!validate()) return;

        setLoading(true);
        try {
            await fetch("/api/business-inquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            alert("Thank you! We'll get back to you shortly.");
            setData({});
            setErrors({});
        } catch (err) {
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const inputClass = (field) =>
        `input ${errors[field] ? "border border-red-500" : "border border-gray-300"}`;

    return (
        <form className="space-y-4">
            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <input
                        className={inputClass("firstName")}
                        placeholder="First Name*"
                        value={data.firstName || ""}
                        onChange={(e) => update("firstName", e.target.value)}
                    />
                    {errors.firstName && (
                        <p className="text-xs text-red-500 mt-1">
                            {errors.firstName}
                        </p>
                    )}
                </div>

                <div>
                    <input
                        className={inputClass("lastName")}
                        placeholder="Last Name*"
                        value={data.lastName || ""}
                        onChange={(e) => update("lastName", e.target.value)}
                    />
                    {errors.lastName && (
                        <p className="text-xs text-red-500 mt-1">
                            {errors.lastName}
                        </p>
                    )}
                </div>
            </div>

            {/* Company */}
            <div>
                <input
                    className={inputClass("company")}
                    placeholder="Company Name (optional)"
                    value={data.company || ""}
                    onChange={(e) => update("company", e.target.value)}
                />
                {errors.company && (
                    <p className="text-xs text-red-500 mt-1">
                        {errors.company}
                    </p>
                )}
            </div>

            {/* Email */}
            <div>
                <input
                    className={inputClass("email")}
                    placeholder="Email Address*"
                    value={data.email || ""}
                    onChange={(e) => update("email", e.target.value)}
                />
                {errors.email && (
                    <p className="text-xs text-red-500 mt-1">
                        {errors.email}
                    </p>
                )}
            </div>

            {/* Contact */}
            <div>
                <PhoneInput
                    country={"in"} // default India (change if needed)
                    value={data.contact || ""}
                    onChange={(value) => update("contact", value)}
                    inputClass={`!w-full !h-[42px] ${errors.contact ? "!border-red-500" : ""
                        }`}
                    containerClass="w-full"
                    buttonClass={errors.contact ? "!border-red-500" : ""}
                    enableSearch={true}
                    placeholder="Enter contact number*"
                />

                {errors.contact && (
                    <p className="text-xs text-red-500 mt-1">
                        {errors.contact}
                    </p>
                )}
            </div>


            {/* Service */}
            <div>
                <select
                    className={inputClass("service")}
                    value={data.service || ""}
                    onChange={(e) => update("service", e.target.value)}
                >
                    <option value="" disabled>
                        Service Type*
                    </option>
                    <option>Product Engineering</option>
                    <option>Custom Software Development</option>
                    <option>Data & AI Solutions</option>
                    <option>Cloud & DevOps</option>
                    <option>System Modernization</option>
                    <option>Other</option>
                </select>
                {errors.service && (
                    <p className="text-xs text-red-500 mt-1">
                        {errors.service}
                    </p>
                )}
            </div>

            {/* Other Service Input */}
            {data.service === "Other" && (
                <div>
                    <input
                        className={inputClass("otherService")}
                        placeholder="Please specify service*"
                        value={data.otherService || ""}
                        onChange={(e) =>
                            update("otherService", e.target.value)
                        }
                    />
                    {errors.otherService && (
                        <p className="text-xs text-red-500 mt-1">
                            {errors.otherService}
                        </p>
                    )}
                </div>
            )}

            {/* Message */}
            <div>
                <textarea
                    className={inputClass("message")}
                    rows={4}
                    placeholder="Describe Your Project / Requirement*"
                    value={data.message || ""}
                    onChange={(e) => update("message", e.target.value)}
                />
                {errors.message && (
                    <p className="text-xs text-red-500 mt-1">
                        {errors.message}
                    </p>
                )}
            </div>

            {/* Submit */}
            <div className="flex justify-end">
                <button
                    type="button"
                    onClick={submit}
                    disabled={loading}
                    className={`px-6 py-2 rounded-md text-white transition
                        ${loading
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-[#1E40AF] hover:bg-[#1C3FAA]"
                        }`}
                >
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </div>
        </form>
    );
};

export default BusinessForm;
