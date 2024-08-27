import { useEffect, useState, useContext } from "react";
import { PlanetContext } from "./../hooks/PlanetProvider";

const FutureYou = () => {
  const [you, setYou] = useState("");
  const url = "https://dog.ceo/api/breeds/image/random";
  const { contextValue } = useContext(PlanetContext);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("An error occurred");
        }
        return res.json();
      })
      .then((data) => setYou(data.message));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-blue-300 text-center">
        This is Future You on Planet {contextValue.name}
      </h2>
      {you && (
        <img
          src={you}
          alt="Future You"
          className="block w-80 h-80 mx-auto rounded-full object-cover"
        />
      )}
    </div>
  );
};

export default FutureYou;
