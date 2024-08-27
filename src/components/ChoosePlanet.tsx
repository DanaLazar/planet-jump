import { useEffect, useState } from "react";
import ImageMapper from "react-img-mapper";
import { useStore } from "./../hooks/store";

// Define the custom area type
interface CustomArea {
  name: string;
  shape: string;
  coords: number[];
}

const ChoosePlanet = () => {
  const { planet, setPlanet, setStep } = useStore();

  const url = `https://api.api-ninjas.com/v1/planets?name=${planet.name}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: { "X-Api-Key": "v6O3Ugge/IZmIdbPI2yqdw==IqASYoaj5mQ1Mpwx" },
    })
      .then((res) => res.json())
      .then((data) => setPlanet(data[0]))
      .catch((err) => console.error("Error:", err));
  }, [planet.name]);

  const handleClick = (area: any) => {
    setPlanet({ ...planet, name: area.name });
    setStep({ step: 2 });
  };

  const MAP = {
    name: "planet-map",
    areas: [
      { name: "Neptune", shape: "circle", coords: [1358, 867, 300] },
      { name: "Jupiter", shape: "circle", coords: [3433, 2290, 300] },
      { name: "Pluto", shape: "circle", coords: [3131, 1042, 300] },
      { name: "Mercury", shape: "circle", coords: [2912, 3209, 300] },
      { name: "Venus", shape: "circle", coords: [2646, 720, 300] },
      { name: "Saturn", shape: "circle", coords: [1898, 3034, 300] },
      { name: "Uranus", shape: "circle", coords: [3763, 1249, 300] },
      { name: "Mars", shape: "circle", coords: [556, 3034, 300] },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-blue-300 text-center">
        Choose the Planet for the jump
      </h2>
      <div className="relative mx-auto w-full max-w-xl" id="parent">
        <ImageMapper
          src="/planets.jpg"
          map={MAP}
          onClick={handleClick}
          responsive={true}
          parentWidth={document.getElementById("parent")?.clientWidth || 800}
        />
      </div>
    </div>
  );
};

export default ChoosePlanet;
