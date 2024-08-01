import React from "react";

const Collection = ({ image, name, icon, number, bid }) => {
  return (
    <div className="flex flex-col gap-4 border-2 border-neutral-300 rounded-2xl p-5">
      <div className="mx-auto my-0">
        <img
          className="w-64 h-52 rounded-2xl object-cover"
          src={image}
          alt="collection-image"
        />
      </div>
      <div className="flex flex-row justify-between items-center">
        <div>
          <h3 className="font-bold">{name}</h3>
        </div>
        <div className="flex flex-row justify-center items-center">
          <img
            className="pointer-events-none"
            src={icon}
            alt="collection-icon"
          />
          <span className="font-bold">{number}</span>
        </div>
      </div>
      <a
        className="text-neutral-800 text-center font-semibold py-2 px-8 rounded-xl border-2 border-neutral-800  hover:bg-neutral-800 hover:text-white"
        href="#"
      >
        {bid}
      </a>
    </div>
  );
};

export default Collection;
