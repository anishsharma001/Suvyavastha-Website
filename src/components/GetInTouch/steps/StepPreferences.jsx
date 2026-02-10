const StepPreferences = ({ data, setData }) => {
    return (
        <div className="space-y-4">
            <input
                className="input"
                placeholder="Position You’re Applying For*"
                value={data.position || ""}
                onChange={(e) =>
                    setData({ ...data, position: e.target.value })
                }
            />

            <div className="relative">
                <select
                    className="input appearance-none pr-10"
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

                {/* Custom dropdown arrow */}
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                    ▾
                </span>
            </div>

            <div className="relative">
                <select
                    className="input appearance-none pr-10"
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

                {/* Custom dropdown arrow */}
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                    ▾
                </span>
            </div>

            <div className="relative">
                <select
                    className="input appearance-none pr-10"
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

                {/* Custom dropdown arrow */}
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                    ▾
                </span>
            </div>

            <div className="relative">
                <select
                    className="input appearance-none pr-10"
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

                {/* Custom dropdown arrow */}
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                    ▾
                </span>
            </div>
        </div>
    );
};

export default StepPreferences;
