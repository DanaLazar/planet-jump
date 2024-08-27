import { useStore } from "../hooks/store";

const NameBadge = () => {
  const { personalInfo } = useStore();
  return (
    <div className="rounded-md border border-shadow-color p-7 text-center w-full shadow-3xl">
      <img
        src={personalInfo.image}
        alt="Avatar"
        className="w-20 h-20 rounded-full mx-auto"
      />
      <p className="text-xl font-medium mt-4 text-gray-300">
        {personalInfo.greeting},
      </p>
      <p className="text-gray-300 text-lg font-bold">{personalInfo.name}</p>
    </div>
  );
};

export default NameBadge;
