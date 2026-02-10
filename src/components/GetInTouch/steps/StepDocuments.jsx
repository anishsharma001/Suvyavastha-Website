import { UploadCloud } from "lucide-react";

const StepDocuments = ({ data, setData, errors }) => {
  return (
    <div className="space-y-5 h-fit">
      {/* LinkedIn */}
      <input
        className="input"
        placeholder="LinkedIn Profile URL*"
        value={data.linkedin || ""}
        onChange={(e) =>
          setData({ ...data, linkedin: e.target.value })
        }
      />

      {/* Portfolio */}
      <input
        className="input"
        placeholder="GitHub / Portfolio / Personal Website (optional)"
        value={data.portfolio || ""}
        onChange={(e) =>
          setData({ ...data, portfolio: e.target.value })
        }
      />

      {/* Resume Upload */}
      <label className="block cursor-pointer">
        <div className="border-2 border-dashed border-gray-300 rounded-lg py-3 px-6 text-center hover:border-[#7A4DFF] transition">
          <UploadCloud className="mx-auto w-6 h-6 text-gray-400" />

          <p className="mt-2 font-medium text-[#2B2B2B]">
            Upload Resume / CV*
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Attach a File (PDF, DOC – Max size – 5MB max)
          </p>

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

      {/* Additional Documents */}
      <label className="block cursor-pointer">
        <div className="border-2 border-dashed border-gray-300 rounded-lg py-3 px-6 text-center hover:border-[#7A4DFF] transition">
          <UploadCloud className="mx-auto w-6 h-6 text-gray-400" />

          <p className="mt-2 font-medium text-[#2B2B2B]">
            Upload Additional Documents (optional)
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Attach a File (PDF, DOC – Max size – 5MB max)
          </p>

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

      {/* Submit Row */}
      <div className="flex items-center justify-between pt-2">
        {/* Confirmation */}
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={data.confirmed || false}
            onChange={(e) =>
              setData({ ...data, confirmed: e.target.checked })
            }
            className="accent-green-600"
          />
          <span>
            I confirm that the information provided is accurate.
          </span>
        </label>
      </div>

      {/* Error */}
      {errors.confirmed && (
        <p className="text-xs text-red-500">
          You must confirm before submitting.
        </p>
      )}
    </div>
  );
};

export default StepDocuments;
