import NameBadge from "./../NameBadge";
import PlanetBadge from "./../PlanetBadge";

type AsideContentType = {
  name: string;
  greeting: string;
  image?: string;
};

const AsideContent = ({ name, greeting, image }: AsideContentType) => {
  return (
    <div className="flex flex-col items-center max-w-xs mx-auto space-y-4">
      <NameBadge name={name} greeting={greeting} image={image} />
      <PlanetBadge />
    </div>
  );
};

export default AsideContent;
