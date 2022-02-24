import React from "react";
import Navigation from "./navigation";

const menuItems = ["Dashboard", "Entries", "Statistics", "About"];

const Sidebar = () => {
  return (
    <header>
      <main>
        <div>
          <Navigation menuItems={menuItems} />
        </div>
      </main>
    </header>
  );
};

export default Sidebar;
