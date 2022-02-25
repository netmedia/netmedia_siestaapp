import React from "react";
import Navigation from "./navigation";
import Logout from "../login/logout";

const menuItems = ["Dashboard", "Entries", "Statistics", "About"];

const Sidebar = () => {
  return (
    <header className="p-5 top-5 left-5 bottom-5 w-[270px] overflow-x-hidden rounded-3xl bg-gradient-to-b from-siesta-blue-dark to-siesta-blue-light fixed z-1">
      <main>
        <div className="z-10 flex justify-between items-center flex-col">
          <div className="no-underline text-white font-regular font-bold text-xl pt-20">
            Siesta.
          </div>
          <Navigation menuItems={menuItems} />
          <Logout />
        </div>
      </main>
    </header>
  );
};

export default Sidebar;
