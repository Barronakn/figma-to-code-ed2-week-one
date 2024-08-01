import React from "react";

const SellList = ({ image, title, text }) => {
  return (
    <div className="flex flex-col justify-start bg-gray-200 cursor-pointer hover:bg-neutral-300 gap-4 rounded-2xl p-5">
      <img
        className="pointer-events-none w-10 h-10 sm:w-12 sm:h-12"
        src={image}
        alt="sell-icon"
      />
      <h3 className="text-xl font-bold text-neutral-800">{title}</h3>
      <p className="text-sm font-medium text-neutral-600">{text}</p>
    </div>
  );
};

export default SellList;
