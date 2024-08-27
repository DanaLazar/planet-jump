import React from "react";
import AsideNav from "./components/layout/AsideNav";
import AsideContent from "./components/layout/AsideContent";
import HeaderContent from "./components/layout/HeaderContent";
import ControlPanel from "./components/ControlPanel";
import FooterContent from "./components/layout/FooterContent";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-midnight text-white w-full flex justify-center lg:justify-start">
        <HeaderContent />
      </header>

      <div className="flex flex-1 flex-col lg:flex-row">
        <aside className="bg-midnight-blue w-full lg:w-60 p-7">
          <AsideNav />
        </aside>

        <main className="flex-1 bg-midnight-dark w-full p-7">
          <ControlPanel />
        </main>

        <aside className="bg-midnight-blue w-full lg:w-96 p-4">
          <AsideContent />
        </aside>
      </div>

      <footer className="bg-midnight text-white p-7 flex justify-center w-full">
        <FooterContent />
      </footer>
    </div>
  );
};

export default Layout;
