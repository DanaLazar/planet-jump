import React, { useContext, useState } from "react";
import ChoosePlanet from "./ChoosePlanet";
import FutureYou from "./FutureYou";
import { StepContext } from "./../hooks/StepProvider";
import PersonalInfo from "./PersonalInfo";

type ControlPanelType = {
  setName: React.Dispatch<React.SetStateAction<string>>;
  setGreeting: React.Dispatch<React.SetStateAction<string>>;
  setImage: React.Dispatch<React.SetStateAction<string>>;
};

const ControlPanel = ({ setName, setGreeting, setImage }: ControlPanelType) => {
  const { stepValue, setStepValue } = useContext(StepContext);

  console.log("context step value", stepValue);

  return (
    <div>
      {stepValue.step === 0 && (
        <PersonalInfo
          setName={setName}
          setGreeting={setGreeting}
          setImage={setImage}
        />
      )}
      {stepValue.step === 1 && <ChoosePlanet />}
      {stepValue.step === 2 && <FutureYou />}
    </div>
  );
};

export default ControlPanel;
