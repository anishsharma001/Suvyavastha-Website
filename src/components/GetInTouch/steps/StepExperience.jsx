const StepExperience = ({ data, setData, errors }) => {
    const inputClass = (field) =>
        `input ${errors[field] ? "border border-red-500" : "border border-gray-300"}`;

    return (
        <div className="space-y-4">
            <div>
                <input
                    className={inputClass("role")}
                    placeholder="Current Role / Designation*"
                    value={data.role || ""}
                    onChange={(e) =>
                        setData({ ...data, role: e.target.value })
                    }
                />
                {errors.role && (
                    <p className="text-xs text-red-500 mt-1">{errors.role}</p>
                )}
            </div>

            <div>
                <select
                    className={inputClass("experience")}
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
                {errors.experience && (
                    <p className="text-xs text-red-500 mt-1">{errors.experience}</p>
                )}
            </div>

            <div>
                <select
                    className={inputClass("skill")}
                    value={data.skill || ""}
                    onChange={(e) =>
                        setData({ ...data, skill: e.target.value })
                    }
                >
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
                {errors.skill && (
                    <p className="text-xs text-red-500 mt-1">{errors.skill}</p>
                )}
            </div>
        </div>
    );
};

export default StepExperience;
