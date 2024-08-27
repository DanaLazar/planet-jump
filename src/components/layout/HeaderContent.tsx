import Earth from "./../../assets/earth.svg";
const HeaderContent = () => {
  return (
    <div className="flex items-center">
      <img src={Earth} alt="Your SVG" className="h-24 w-auto" />
      <h1 className="text-white text-2xl font-bold -ml-10">You are on Earth</h1>
    </div>
  );
};

export default HeaderContent;
