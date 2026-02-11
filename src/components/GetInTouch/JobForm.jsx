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
        <StepExperience data={data} setData={setData} errors={errors} />,
        <StepPreferences data={data} setData={setData} errors={errors} />,
        <StepDocuments data={data} setData={setData} errors={errors} />,
    ];

    useEffect(() => {
        onStepChange(step);
    }, [step, onStepChange]);

    useEffect(() => {
        gsap.fromTo(
            ref.current,
            { opacity: 0, x: 40 },
            { opacity: 1, x: 0, duration: 0.4 }
        );
    }, [step]);

    const isEmpty = (val) => !val || val.trim() === "";

    const validate = () => {
        let e = {};

        // STEP 0
        if (step === 0) {
            if (isEmpty(data.firstName))
                e.firstName = "First name is required.";
            if (isEmpty(data.lastName))
                e.lastName = "Last name is required.";

            if (isEmpty(data.email))
                e.email = "Email is required.";
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
                e.email = "Enter valid email address.";

            if (!data.contact)
                e.contact = "Contact number is required.";
            else if (!/^\d{8,15}$/.test(data.contact.replace(/\D/g, "")))
                e.contact = "Enter valid contact number (8–15 digits).";
        }

        // STEP 1
        if (step === 1) {
            if (isEmpty(data.role))
                e.role = "Current role is required.";
            if (!data.experience)
                e.experience = "Experience is required.";
            if (!data.skill)
                e.skill = "Primary skill is required.";
        }

        // STEP 2
        if (step === 2) {
            if (isEmpty(data.position))
                e.position = "Position is required.";
            if (!data.employmentType)
                e.employmentType = "Employment type is required.";
            if (!data.availability)
                e.availability = "Availability is required.";
            if (!data.location)
                e.location = "Location preference is required.";
            if (!data.authorization)
                e.authorization = "Authorization is required.";
        }

        // STEP 3
        if (step === 3) {
            if (!data.linkedin || data.linkedin.trim() === "")
                e.linkedin = "LinkedIn profile is required.";
            else if (!/^https?:\/\/.+\..+/.test(data.linkedin))
                e.linkedin = "Enter a valid URL.";

            if (data.portfolio && !/^https?:\/\/.+\..+/.test(data.portfolio))
                e.portfolio = "Enter a valid URL.";

            if (!data.resume)
                e.resume = "Resume is required.";
            else if (data.resume.size > 5 * 1024 * 1024)
                e.resume = "File must be under 5MB.";

            if (!data.confirmed)
                e.confirmed = "You must confirm before submitting.";
        }


        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const next = async () => {
        if (!validate()) return;

        if (step === steps.length - 1) {
            const formData = new FormData();
            Object.keys(data).forEach((key) => {
                formData.append(key, data[key]);
            });

            await fetch("/api/job", {
                method: "POST",
                body: formData,
            });

            alert("Application submitted!");
        } else {
            setStep(step + 1);
            setErrors({});
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
        </section>
    );
};

export default JobForm;
