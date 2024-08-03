import React from "react";
import Logo from "../Logo";

const DesktopNavbar = () => {
  return (
    <div className="lg:flex flex-row justify-between 2xl:justify-evenly px-32 items-center hidden">
      <Logo />
      <nav>
        <ul className="flex flex-col lg:flex-row justify-between gap-7 text-neutral-700">
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
      <div className="flex flex-row gap-5 justify-center items-center">
        <a className="text-neutral-800 text-shadow-xl hover:underline" href="#">
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
  );
};

export default DesktopNavbar;
