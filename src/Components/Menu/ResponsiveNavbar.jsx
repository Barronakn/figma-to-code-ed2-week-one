import React, { useState } from "react";
import Logo from "../Logo";
import MenuClose from "./MenuClose";
import MenuOpen from "./MenuOpen";

const ResponsiveNavbar = () => {
  const [open, setOpen] = useState(false);

  const handleopen = () => {
    setOpen(true);
  };

  const handleclose = () => {
    setOpen(false);
  };

  return (
    <div className="lg:hidden block">
      <div className="flex flex-row justify-between px-8 sm:px-12 md:px-32 items-center">
        <Logo />
        <MenuOpen handleopen={handleopen} />
      </div>
      <div
        onClick={handleclose}
        className={`fixed z-40 top-0 left-0 h-screen w-full bg-black transition-opacity duration-500 ${
          open ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`fixed z-50 h-screen w-11/12 sm:w-3/4 right-0 top-0 bg-[#F8F8F8] transition-transform duration-1000 px-5 sm:px-11 md:px-[120px] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {open && (
          <div className="relative top-0 border-r border-r-[#D9D9D9] fill-navbar-right">
            <MenuClose handleclose={handleclose} />
            <nav className="py-20 sm:py-32 clear-both">
              <ul className="flex flex-col xl:flex-row justify-between gap-7 text-neutral-700">
                <li>
                  <a className="hover:underline" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Top sales
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Collections
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Our blog
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    About us
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex flex-row gap-5 justify-center items-center pb-12 fill-navbar-bottom">
              <a
                className="text-neutral-800 text-shadow-xl hover:underline"
                href="#"
              >
                Sign up
              </a>
              <span className="text-neutral-800 text-5xl">|</span>
              <a
                href="#"
                className="text-white bg-black shadow-xl hover:text-black hover:bg-white font-semibold rounded-full px-6 py-3"
              >
                Connect Wallet
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
