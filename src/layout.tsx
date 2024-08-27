import React, { useState } from "react";
import AsideNav from "./components/layout/AsideNav";
import AsideContent from "./components/layout/AsideContent";
import HeaderContent from "./components/layout/HeaderContent";
import ControlPanel from "./components/ControlPanel";
import Smile from "./assets/smile.svg";

interface Props {
  children: React.ReactNode;
}

const Layout = () => {
  const [name, setName] = useState("human");
  const [greeting, setGreeting] = useState("hi");
  const [image, setImage] = useState(Smile);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-midnight text-white">
        <HeaderContent />
      </header>

      <div className="flex flex-1">
        <aside className="bg-midnight-blue w-60 p-7">
          <AsideNav />
        </aside>

        <main className="flex-1 bg-midnight-dark p-7">
          <ControlPanel
            setName={setName}
            setGreeting={setGreeting}
            setImage={setImage}
          />
        </main>

        <aside className="bg-midnight-blue w-96 p-4">
          <AsideContent name={name} greeting={greeting} image={image} />
        </aside>
      </div>

      <footer className="bg-midnight text-white p-7 text-center">
        Back to Earth
      </footer>
    </div>
  );
};

export default Layout;
