import React from "react";
import Collection from "../Collection";
import collectionimage1 from "../../assets/collection/collectionimage1.png";
import collectionimage2 from "../../assets/collection/collectionimage2.png";
import collectionimage3 from "../../assets/collection/collectionimage3.png";
import collectionimage4 from "../../assets/collection/collectionimage4.png";
import collectionicon from "../../assets/collection/collectionicon.png";

const Collections = () => {
  return (
    <section className="flex flex-col gap-9 py-24">
      <h2 className="text-2xl sm:text-3xl font-bold">Our Collections</h2>
      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center text-sm font-semibold gap-2">
        <div className="flex flex-row gap-2 overflow-x-auto md:overflow-x-hidden">
          <button className="bg-neutral-800 text-sm font-semibold py-2 px-6 text-white rounded-xl whitespace-nowrap">
            All categories
          </button>
          <button className="sort-btn">Art</button>
          <button className="sort-btn">Celebrities</button>
          <button className="sort-btn">Gaming</button>
          <button className="sort-btn">Sport</button>
        </div>
        <div>
          <a className="text-sm font-semibold underline hover:bg-black hover:bg-opacity-20 whitespace-nowrap" href="#">
            View more
          </a>
        </div>
      </div>

      <div className="icon grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 px-5 sm:px-11 xl:px-0">
        <Collection image={collectionimage1} name="CyberPunk" icon={collectionicon} number={68} bid="Place a Bid" />
        <Collection image={collectionimage2} name="Durolost Boll - Upper" icon={collectionicon} number={68} bid="Place a Bid" />
        <Collection image={collectionimage3} name="Space X Wiper" icon={collectionicon} number={68} bid="Place a Bid" />
        <Collection image={collectionimage4} name="Snoop Dogg" icon={collectionicon} number={68} bid="Place a Bid" />
      </div>
    </section>
  );
};

export default Collections;
