import React from "react";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="pt-24 z-0">
      <div className="fill sm:pl-12 md:pl-32">
        <Logo />
      </div>
      <div className="flex flex-col gap-4 xl:gap-0 xl:flex-row justify-between py-8">
        <p className="text-xl sm:text-2xl font-semibold text-neutral-600">Create Explore & Collect Digital NFTs</p>
        <ul className="flex flex-row gap-8 text-xs justify-center sm:justify-stretch sm:text-sm font-medium">
          <li>
            <a className="hover:underline" href="#">Privacy</a>
          </li>
          <li>
            <a className="hover:underline" href="#">Terms & Conditions</a>
          </li>
          <li>
            <a className="hover:underline" href="#">About Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
