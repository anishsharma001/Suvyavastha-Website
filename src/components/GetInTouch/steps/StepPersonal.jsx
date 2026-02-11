import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const StepPersonal = ({ data, setData, errors }) => {
    const inputClass = (field) =>
        `input ${errors[field] ? "border border-red-500" : "border border-gray-300"}`;

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <input
                        className={inputClass("firstName")}
                        placeholder="First Name*"
                        value={data.firstName || ""}
                        onChange={(e) =>
                            setData({ ...data, firstName: e.target.value })
                        }
                    />
                    {errors.firstName && (
                        <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>
                    )}
                </div>

                <div>
                    <input
                        className={inputClass("lastName")}
                        placeholder="Last Name*"
                        value={data.lastName || ""}
                        onChange={(e) =>
                            setData({ ...data, lastName: e.target.value })
                        }
                    />
                    {errors.lastName && (
                        <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>
                    )}
                </div>
            </div>

            <div>
                <input
                    className={inputClass("email")}
                    placeholder="Email Address*"
                    value={data.email || ""}
                    onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                    }
                />
                {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
            </div>

            <div>
                <PhoneInput
                    country={"in"}
                    value={data.contact || ""}
                    onChange={(phone) =>
                        setData({ ...data, contact: phone })
                    }
                    inputClass={`!w-full !h-[42px] ${
                        errors.contact ? "!border-red-500" : ""
                    }`}
                    containerClass="w-full"
                    buttonClass={errors.contact ? "!border-red-500" : ""}
                    enableSearch
                    placeholder="Enter contact number*"
                />
                {errors.contact && (
                    <p className="text-xs text-red-500 mt-1">{errors.contact}</p>
                )}
            </div>
        </div>
    );
};

export default StepPersonal;
