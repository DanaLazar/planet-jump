import { useStore } from "./../../hooks/store";
import Earth from "./../../assets/earth.svg";
import { IoArrowForward } from "react-icons/io5";
import Smile from "./../../assets/smile.svg";

const FooterContent = () => {
  const { setPlanet, setStep, setName, setGreeting, setImage } = useStore();

  const handleReset = () => {
    // Reset all states to their initial values
    setPlanet({ name: "Earth", temperature: 10, distance_light_year: 0 });
    setStep({ step: 0 });
    setName("human");
    setGreeting("hi");
    setImage(Smile);
  };

  return (
    <button
      onClick={handleReset}
      className="flex justify-center items-center gap-4 p-2 bg-transparent border-none cursor-pointer"
    >
      <h1 className="text-white text-xl">Back to</h1>
      <IoArrowForward className="text-white text-xl" />
      <img src={Earth} alt="Your SVG" className="h-8 w-auto" />
    </button>
  );
};

export default FooterContent;
