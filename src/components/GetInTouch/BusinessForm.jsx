import { useState } from "react";

const BusinessForm = () => {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const update = (field, value) => {
        setData((prev) => ({ ...prev, [field]: value }));
    };

    const validate = () => {
        let e = {};
        if (!data.firstName) e.firstName = true;
        if (!data.lastName) e.lastName = true;
        if (!data.email) e.email = true;
        if (!data.contact) e.contact = true;
        if (!data.service) e.service = true;
        if (!data.message) e.message = true;

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
        } catch (err) {
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="space-y-4">
            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    className="input"
                    placeholder="First Name*"
                    value={data.firstName || ""}
                    onChange={(e) => update("firstName", e.target.value)}
                />
                <input
                    className="input"
                    placeholder="Last Name*"
                    value={data.lastName || ""}
                    onChange={(e) => update("lastName", e.target.value)}
                />
            </div>

            {/* Company */}
            <input
                className="input"
                placeholder="Company Name (optional)"
                value={data.company || ""}
                onChange={(e) => update("company", e.target.value)}
            />

            {/* Email */}
            <input
                className="input"
                placeholder="Email Address*"
                value={data.email || ""}
                onChange={(e) => update("email", e.target.value)}
            />

            {/* Contact */}
            <input
                className="input"
                placeholder="Contact Number*"
                value={data.contact || ""}
                onChange={(e) => update("contact", e.target.value)}
            />

            {/* Service */}
            <div className="relative">
                <select
                    className="input appearance-none pr-10"
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

                {/* Custom dropdown arrow */}
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                    ▾
                </span>
            </div>


            {/* Message */}
            <textarea
                className="input resize-none"
                rows={4}
                placeholder="Describe Your Project / Requirement*"
                value={data.message || ""}
                onChange={(e) => update("message", e.target.value)}
            />

            {/* Errors */}
            {Object.keys(errors).length > 0 && (
                <p className="text-xs text-red-500">
                    Please fill all required fields.
                </p>
            )}

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

            {/* Note */}
            <p className="text-xs text-gray-400">
                🔒 We provide an NDA before any discussion, if required.
            </p>
        </form>
    );
};

export default BusinessForm;
