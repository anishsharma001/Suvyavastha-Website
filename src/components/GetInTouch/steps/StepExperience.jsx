const StepExperience = ({ data, setData }) => {
    return (
        <div className="space-y-4">
            <input
                className="input"
                placeholder="Current Role / Designation*"
                value={data.role || ""}
                onChange={(e) =>
                    setData({ ...data, role: e.target.value })
                }
            />

            <div className="relative">
                <select
                    className="input appearance-none pr-10"
                    value={data.experience || ""}
                    onChange={(e) =>
                        setData({ ...data, experience: e.target.value })
                    }
                >
                    <option value="" disabled>
                        Years of Experience*
                    </option>
                    <option>0–1 years</option>
                    <option>1–3 years</option>
                    <option>3–5 years</option>
                    <option>5–8 years</option>
                    <option>8–12 years</option>
                    <option>12+ years</option>
                </select>

                {/* Custom dropdown arrow */}
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                    ▾
                </span>
            </div>

            <div className="relative">
                <select
                    className="input appearance-none pr-10"
                    value={data.skill || ""}
                    onChange={(e) =>
                        setData({ ...data, skill: e.target.value })
                    }
                >
                    {/* Placeholder option (never styled) */}
                    <option value="" disabled>
                        Primary Skill Area*
                    </option>
                    <option>Frontend Engineering</option>
                    <option>Backend Engineering</option>
                    <option>Full Stack Development</option>
                    <option>Mobile App Development</option>
                    <option>Data Engineering</option>
                    <option>DevOps / Cloud</option>
                    <option>Other</option>
                </select>

                {/* Dropdown arrow */}
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                    ▾
                </span>
            </div>

        </div>
    );
};

export default StepExperience;
