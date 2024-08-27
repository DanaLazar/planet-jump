import { useStore } from "../hooks/store";
import { IoLocationOutline } from "react-icons/io5";

const PlanetBadge = () => {
  const { planet } = useStore();

  return (
    <div className="rounded-md border border-blue-300 p-7 mt-4 text-center w-full shadow-3xl">
      <div className="m-auto text-blue-300 h-20 w-20">
        <IoLocationOutline className="w-full h-full " />
      </div>
      <p className="text-lg font-medium my-4 text-white">
        Planet name: {planet.name}
      </p>
      <p className="text-gray-300 text-sm font-bold">
        Temperature:{" "}
        <span className="text-lg">
          {(planet.temperature - 273.15).toFixed(2)} ℃
        </span>
      </p>
      <p className="text-gray-300 text-sm font-bold">
        Distance from Earth in light years:{" "}
        <span className="text-lg">{planet.distance_light_year}</span>
      </p>
    </div>
  );
};

export default PlanetBadge;
