import { useEffect } from "react";
import { useStore } from "./../../hooks/store";

function AsideNav() {
  const { step, setStep } = useStore();

  const steps = [
    { label: "Step 1", description: "Create an account" },
    { label: "Step 2", description: "Choose planet" },
    { label: "Step 3", description: "Jump" },
  ];

  useEffect(() => {
    setStep({ step: step.step });
  }, [step.step]);

  return (
    <div className="flex flex-col space-y-7">
      {steps.map((stepItem, index) => (
        <div
          key={index}
          className={`flex items-start cursor-pointer ${
            index <= step.step ? "text-blue-200" : "text-gray-200"
          }`}
          onClick={() => setStep({ step: index })}
        >
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
              index === step.step
                ? "border-blue-600 bg-blue-600 text-white"
                : index < step.step
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-gray-300"
            }`}
          >
            {index + 1}
          </div>
          <div className="ml-4">
            <div className="font-medium">{stepItem.label}</div>
            <div className="text-sm">{stepItem.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AsideNav;
