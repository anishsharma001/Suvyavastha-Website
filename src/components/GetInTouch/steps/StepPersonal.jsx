import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const StepPersonal = ({ data, setData, errors }) => {
  return (
    <div className="space-y-4">
      {/* First & Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            className="input"
            placeholder="First Name*"
            value={data.firstName || ""}
            onChange={(e) =>
              setData({ ...data, firstName: e.target.value })
            }
          />
          {errors.firstName && (
            <p className="text-xs text-red-500 mt-1">
              First name is required
            </p>
          )}
        </div>

        <div>
          <input
            className="input"
            placeholder="Last Name*"
            value={data.lastName || ""}
            onChange={(e) =>
              setData({ ...data, lastName: e.target.value })
            }
          />
          {errors.lastName && (
            <p className="text-xs text-red-500 mt-1">
              Last name is required
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <input
          className="input"
          placeholder="Email Address*"
          type="email"
          value={data.email || ""}
          onChange={(e) =>
            setData({ ...data, email: e.target.value })
          }
        />
        {errors.email && (
          <p className="text-xs text-red-500 mt-1">
            Email address is required
          </p>
        )}
      </div>

      {/* Contact Number with Flag */}
      <div>
        <PhoneInput
          country={"in"}
          value={data.contact || ""}
          onChange={(phone) =>
            setData({ ...data, contact: phone })
          }
          inputProps={{
            name: "contact",
            required: true,
          }}
          containerClass="w-full"
          inputClass="!w-full !h-[42px] !text-sm !border !rounded-md !pl-14"
          buttonClass="!border !rounded-l-md"
        />

        {errors.contact && (
          <p className="text-xs text-red-500 mt-1">
            Contact number is required
          </p>
        )}
      </div>
    </div>
  );
};

export default StepPersonal;
