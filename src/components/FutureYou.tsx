import { useEffect, useState } from "react";
import { useStore } from "./../hooks/store";

const FutureYou = () => {
  const { planet } = useStore();
  const [you, setYou] = useState("");
  const url = "https://dog.ceo/api/breeds/image/random";

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
        This is Future You on Planet {planet.name}
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
