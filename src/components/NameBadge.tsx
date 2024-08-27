type NameBadgeProps = {
  name: string;
  greeting?: string;
  image?: string;
};

const NameBadge = ({ name, greeting, image }: NameBadgeProps) => {
  return (
    <div className="rounded-md border border-shadow-color p-7 text-center w-full shadow-3xl">
      <img
        src={image}
        alt="Avatar"
        className="w-20 h-20 rounded-full mx-auto"
      />
      <p className="text-xl font-medium mt-4 text-gray-300">{greeting},</p>
      <p className="text-gray-300 text-lg font-bold">{name}</p>
    </div>
  );
};

export default NameBadge;
