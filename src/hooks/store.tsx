import create from "zustand";
import { Planet, PersonalInfo, Step } from "../types/types";
import Smile from "./../assets/smile.svg";

export const useStore = create<{
  planet: Planet;
  setPlanet: (planet: Planet) => void;
  step: Step;
  setStep: (step: Step) => void;
  personalInfo: PersonalInfo;
  setName: (name: string) => void;
  setGreeting: (greeting: string) => void;
  setImage: (image: string) => void;
}>((set) => ({
  planet: {
    name: "Earth",
    temperature: 10,
    distance_light_year: 0,
  },
  setPlanet: (planet: Planet) => set({ planet }),

  step: { step: 0 },
  setStep: (step: Step) => set({ step }),

  personalInfo: {
    name: "human",
    greeting: "hi",
    image: Smile,
  },
  setName: (name: string) =>
    set((state) => ({
      personalInfo: {
        ...state.personalInfo,
        name,
      },
    })),
  setGreeting: (greeting: string) =>
    set((state) => ({
      personalInfo: {
        ...state.personalInfo,
        greeting,
      },
    })),
  setImage: (image: string) =>
    set((state) => ({
      personalInfo: {
        ...state.personalInfo,
        image,
      },
    })),
}));
