import React, { useState, createContext } from "react";

type Props = {
  children: React.ReactNode;
};

export type Planet = {
  name: string;
  temperature: number;
  distance_light_year: number;
};

export type PlanetContextType = {
  contextValue: Planet;
  setContextValue: React.Dispatch<React.SetStateAction<Planet>>;
};

export const PlanetContext = createContext({} as PlanetContextType);

export const PlanetContextProvider = ({ children }: Props) => {
  const [contextValue, setContextValue] = useState({
    name: "Earth",
    temperature: 288,
    distance_light_year: 0,
  });
  return (
    <PlanetContext.Provider value={{ contextValue, setContextValue }}>
      {children}
    </PlanetContext.Provider>
  );
};
