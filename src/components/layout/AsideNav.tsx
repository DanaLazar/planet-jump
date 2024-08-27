import { useState, useContext, useEffect } from "react";
import { StepContext } from "./../../hooks/StepProvider";

function AsideNav() {
  const [active, setActive] = useState(0);
  const { setStepValue } = useContext(StepContext);

  useEffect(() => {
    setStepValue({ step: active });
  }, [active]);

  const steps = [
    { label: "Step 1", description: "Create an account" },
    { label: "Step 2", description: "Choose planet" },
    { label: "Step 3", description: "Jump" },
  ];

  return (
    <div className="flex flex-col space-y-7">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex items-start cursor-pointer ${
            index <= active ? "text-blue-200" : "text-gray-200"
          }`}
          onClick={() => setActive(index)}
        >
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
              index <= active
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-gray-300"
            }`}
          >
            {index + 1}
          </div>
          <div className="ml-4">
            <div className="font-medium">{step.label}</div>
            <div className="text-sm">{step.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AsideNav;
