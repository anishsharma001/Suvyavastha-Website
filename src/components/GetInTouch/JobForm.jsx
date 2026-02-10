import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import StepIndicator from "./StepIndicator";

import StepPersonal from "./steps/StepPersonal";
import StepExperience from "./steps/StepExperience";
import StepPreferences from "./steps/StepPreferences";
import StepDocuments from "./steps/StepDocuments";

const JobForm = ({ onStepChange }) => {
    const [step, setStep] = useState(0);
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});
    const ref = useRef(null);

    const steps = [
        <StepPersonal data={data} setData={setData} errors={errors} />,
        <StepExperience data={data} setData={setData} />,
        <StepPreferences data={data} setData={setData} />,
        <StepDocuments data={data} setData={setData} errors={errors} />,
    ];

    // 🔔 Inform parent whenever step changes
    useEffect(() => {
        onStepChange(step);
    }, [step, onStepChange]);

    // GSAP animation
    useEffect(() => {
        gsap.fromTo(
            ref.current,
            { opacity: 0, x: 40 },
            { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
        );
    }, [step]);

    const validate = () => {
        let e = {};
        if (step === 0) {
            if (!data.firstName) e.firstName = true;
            if (!data.email) e.email = true;
        }
        if (step === 3 && !data.confirmed) e.confirmed = true;
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const next = async () => {
        if (!validate()) return;

        if (step === steps.length - 1) {
            await fetch("/api/job", {
                method: "POST",
                body: JSON.stringify(data),
            });
            alert("Application submitted!");
        } else {
            setStep(step + 1);
        }
    };

    return (
        <section className="relative h-full">
            <StepIndicator step={step} total={steps.length} />

            <div ref={ref}>{steps[step]}</div>

            <div className="mt-6 flex justify-between">
                {step > 0 && (
                    <button
                        onClick={() => setStep(step - 1)}
                        className="px-5 py-2 border rounded-md"
                    >
                        Back
                    </button>
                )}

                <button
                    onClick={next}
                    className="ml-auto px-6 py-2 bg-[#1E40AF] text-white rounded-md"
                >
                    {step === steps.length - 1 ? "Submit" : "Continue"}
                </button>
            </div>

            {/* Privacy Note */}
            <p className="text-xs text-gray-400 flex items-center gap-1 mt-4 md:mt-0 md:absolute md:bottom-0 md:left-0 md:right-0">
                🔒 We respect your privacy and do not share applicant data externally.
            </p>
        </section>
    );
};

export default JobForm;
