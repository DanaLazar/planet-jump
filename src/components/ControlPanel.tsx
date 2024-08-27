import ChoosePlanet from "./ChoosePlanet";
import FutureYou from "./FutureYou";
import PersonalInfo from "./PersonalInfo";
import { useStore } from "../hooks/store";

const ControlPanel = () => {
  const { step } = useStore();

  return (
    <div>
      {step.step === 0 && <PersonalInfo />}
      {step.step === 1 && <ChoosePlanet />}
      {step.step === 2 && <FutureYou />}
    </div>
  );
};

export default ControlPanel;
