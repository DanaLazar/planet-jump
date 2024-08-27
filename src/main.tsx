import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StepContextProvider } from "./hooks/StepProvider";
import { PlanetContextProvider } from "./hooks/PlanetProvider";
import Layout from "./layout";
import "./index.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    {/* <StepContextProvider>
      <PlanetContextProvider> */}
    <Layout />
    {/* </PlanetContextProvider>
    </StepContextProvider> */}
  </StrictMode>
);
