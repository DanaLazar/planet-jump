import { useState, createContext } from "react";
import { Step } from "../types/types";

type Props = {
  children: React.ReactNode;
};

export type StepContextType = {
  stepValue: Step;
  setStepValue: React.Dispatch<React.SetStateAction<Step>>;
};

export const StepContext = createContext({} as StepContextType);

export const StepContextProvider = ({ children }: Props) => {
  const [stepValue, setStepValue] = useState({
    step: 0,
  });
  return (
    <StepContext.Provider value={{ stepValue, setStepValue }}>
      {children}
    </StepContext.Provider>
  );
};
