import React from "react";
import arrow from "../../assets/icons/move-right.png";
import hero1 from "../../assets/heros/hero1-img.png";
import hero2 from "../../assets/heros/hero2-img.png";
import heroicon from "../../assets/heros/hero-icon.png";

const Hero = () => {
  return (
    <section className="hero overflow-hidden flex xl:flex-row flex-col py-28 2xl:justify-between gap-10 sm:gap-2">
      <div className="left w-full xl:w-1/2 2xl:w-full flex flex-col gap-12">
        <h1 className="text-5xl leading-10 sm:text-8xl sm:leading-[108px]">
          See the NFT new world
        </h1>
        <div>
          <p className="text-sm xl:text-base">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p>Etiam eu turpis molestie, di</p>
        </div>
        <a
          className="flex flex-row gap-4 items-center font-semibold hover:underline"
          href="#"
        >
          <span>Discover Vow</span>
          <img
            className="rounded-full pointer-events-none p-2 border-2 border-neutral-600"
            src={arrow}
            alt="arrow-icon"
          />
        </a>
      </div>
      <div className="right relative w-full xl:w-1/2 flex flex-row px-0 sm:px-6 xl:px-0 justify-center gap-3">
        <div className="flex flex-col absolute left-0 top-0 sm:relative">
          <div className="self-end">
            <img
              className="pointer-events-none w-40 h-28"
              src={heroicon}
              alt="hero-icon"
            />
          </div>
          <div className="w-64 h-96 sm:h-[442px]">
            <img
              className="pointer-events-none object-cover rounded-full w-64 h-96 sm:h-[442px]"
              src={hero1}
              alt="hero1-img"
            />
          </div>
        </div>
        <div className="w-64 h-96 sm:h-[442px]">
          <img
            className="pointer-events-none transform sm:translate-x-0 translate-x-[90%] object-cover rounded-full w-64 h-96 sm:h-[442px]"
            src={hero2}
            alt="hero2-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
