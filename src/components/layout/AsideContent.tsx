import NameBadge from "./../NameBadge";
import PlanetBadge from "./../PlanetBadge";

const AsideContent = () => {
  return (
    <div className="flex flex-col items-center max-w-xs mx-auto space-y-4">
      <NameBadge />
      <PlanetBadge />
    </div>
  );
};

export default AsideContent;
