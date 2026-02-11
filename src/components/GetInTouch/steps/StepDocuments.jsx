import { UploadCloud } from "lucide-react";

const StepDocuments = ({ data, setData, errors }) => {
  const inputClass = (field) =>
    `input ${errors[field] ? "border border-red-500" : "border border-gray-300"
    }`;

  return (
    <div className="space-y-5 h-fit">

      {/* LinkedIn */}
      <div>
        <input
          className={inputClass("linkedin")}
          placeholder="LinkedIn Profile URL*"
          value={data.linkedin || ""}
          onChange={(e) =>
            setData({ ...data, linkedin: e.target.value })
          }
        />
        {errors.linkedin && (
          <p className="text-xs text-red-500 mt-1">
            {errors.linkedin}
          </p>
        )}
      </div>

      {/* Portfolio */}
      <div>
        <input
          className={inputClass("portfolio")}
          placeholder="GitHub / Portfolio / Personal Website (optional)"
          value={data.portfolio || ""}
          onChange={(e) =>
            setData({ ...data, portfolio: e.target.value })
          }
        />
        {errors.portfolio && (
          <p className="text-xs text-red-500 mt-1">
            {errors.portfolio}
          </p>
        )}
      </div>

      {/* Resume Upload */}
      <label className="block cursor-pointer">
        <div
          className={`border-2 border-dashed rounded-lg py-3 px-6 text-center transition ${errors.resume
              ? "border-red-500"
              : "border-gray-300 hover:border-[#7A4DFF]"
            }`}
        >
          <UploadCloud className="mx-auto w-6 h-6 text-gray-400" />

          <p className="mt-2 font-medium text-[#2B2B2B]">
            Upload Resume / CV*
          </p>

          {data.resume ? (
            <p className="mt-1 text-sm text-green-600 font-medium">
              ✅ {data.resume.name}
            </p>
          ) : (
            <p className="mt-1 text-xs text-gray-500">
              Attach a File (PDF, DOC – Max size – 5MB max)
            </p>
          )}

          <input
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx"
            onChange={(e) =>
              setData({ ...data, resume: e.target.files[0] })
            }
          />
        </div>
      </label>


      {errors.resume && (
        <p className="text-xs text-red-500 -mt-3">
          {errors.resume}
        </p>
      )}

      {/* Additional Documents */}
      <label className="block cursor-pointer">
        <div className="border-2 border-dashed border-gray-300 rounded-lg py-3 px-6 text-center hover:border-[#7A4DFF] transition">
          <UploadCloud className="mx-auto w-6 h-6 text-gray-400" />

          <p className="mt-2 font-medium text-[#2B2B2B]">
            Upload Additional Documents (optional)
          </p>

          {data.additionalDocs ? (
            <p className="mt-1 text-sm text-green-600 font-medium">
              ✅ {data.additionalDocs.name}
            </p>
          ) : (
            <p className="mt-1 text-xs text-gray-500">
              Attach a File (PDF, DOC – Max size – 5MB max)
            </p>
          )}

          <input
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx"
            onChange={(e) =>
              setData({
                ...data,
                additionalDocs: e.target.files[0],
              })
            }
          />
        </div>
      </label>


      {/* Confirmation */}
      <div className="flex items-center justify-between pt-2">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={data.confirmed || false}
            onChange={(e) =>
              setData({ ...data, confirmed: e.target.checked })
            }
            className={`accent-green-600 ${errors.confirmed ? "outline outline-red-500" : ""
              }`}
          />
          <span>
            I confirm that the information provided is accurate.
          </span>
        </label>
      </div>

      {errors.confirmed && (
        <p className="text-xs text-red-500">
          {errors.confirmed}
        </p>
      )}
    </div>
  );
};

export default StepDocuments;
