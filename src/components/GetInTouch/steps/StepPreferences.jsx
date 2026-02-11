const StepPreferences = ({ data, setData, errors }) => {
    const inputClass = (field) =>
        `input ${errors[field] ? "border border-red-500" : "border border-gray-300"}`;

    const isEmpty = (val) => !val || val.trim() === "";

    return (
        <div className="space-y-4">

            {/* Position */}
            <div>
                <input
                    className={inputClass("position")}
                    placeholder="Position You’re Applying For*"
                    value={data.position || ""}
                    onChange={(e) =>
                        setData({ ...data, position: e.target.value })
                    }
                />
                {errors.position && (
                    <p className="text-xs text-red-500 mt-1">
                        {errors.position}
                    </p>
                )}
            </div>

            {/* Employment Type */}
            <div className="relative">
                <select
                    className={`${inputClass("employmentType")} appearance-none pr-10`}
                    value={data.employmentType || ""}
                    onChange={(e) =>
                        setData({ ...data, employmentType: e.target.value })
                    }
                >
                    <option value="" disabled>
                        Employment Type*
                    </option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                    <option>Consulting</option>
                </select>

                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                    ▾
                </span>

                {errors.employmentType && (
                    <p className="text-xs text-red-500 mt-1">
                        {errors.employmentType}
                    </p>
                )}
            </div>

            {/* Availability */}
            <div className="relative">
                <select
                    className={`${inputClass("availability")} appearance-none pr-10`}
                    value={data.availability || ""}
                    onChange={(e) =>
                        setData({ ...data, availability: e.target.value })
                    }
                >
                    <option value="" disabled>
                        Notice Period / Availability*
                    </option>
                    <option>Immediate</option>
                    <option>1–2 weeks</option>
                    <option>1 month</option>
                    <option>Flexible / Negotiable</option>
                </select>

                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                    ▾
                </span>

                {errors.availability && (
                    <p className="text-xs text-red-500 mt-1">
                        {errors.availability}
                    </p>
                )}
            </div>

            {/* Location */}
            <div className="relative">
                <select
                    className={`${inputClass("location")} appearance-none pr-10`}
                    value={data.location || ""}
                    onChange={(e) =>
                        setData({ ...data, location: e.target.value })
                    }
                >
                    <option value="" disabled>
                        Work Location Preference*
                    </option>
                    <option>India</option>
                    <option>Canada</option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                </select>

                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                    ▾
                </span>

                {errors.location && (
                    <p className="text-xs text-red-500 mt-1">
                        {errors.location}
                    </p>
                )}
            </div>

            {/* Authorization */}
            <div className="relative">
                <select
                    className={`${inputClass("authorization")} appearance-none pr-10`}
                    value={data.authorization || ""}
                    onChange={(e) =>
                        setData({ ...data, authorization: e.target.value })
                    }
                >
                    <option value="" disabled>
                        Authorized to Work in India?*
                    </option>
                    <option>Yes</option>
                    <option>No</option>
                </select>

                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                    ▾
                </span>

                {errors.authorization && (
                    <p className="text-xs text-red-500 mt-1">
                        {errors.authorization}
                    </p>
                )}
            </div>
        </div>
    );
};

export default StepPreferences;
