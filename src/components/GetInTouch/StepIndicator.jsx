const StepIndicator = ({ step, total }) => (
  <div className="mb-6">
    <p className="text-sm font-medium text-[#5804BF]">
      Step {step + 1} / {total}
    </p>
    <div className="mt-2 h-2 bg-gray-200 rounded-full">
      <div
        className="h-full bg-[#5804BF] rounded-full transition-all"
        style={{ width: `${((step + 1) / total) * 100}%` }}
      />
    </div>
  </div>
);

export default StepIndicator;
