import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Header = () => {
  return (
    <header className="py-5 fill-header-bottom">
      <DesktopNavbar />
      <ResponsiveNavbar />
    </header>
  );
};

export default Header;
