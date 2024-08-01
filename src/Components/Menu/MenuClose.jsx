import React from "react";
import close from "../../assets/icons/close.png";

const MenuClose = ({ handleclose }) => {
  return (
    <div onClick={handleclose} className="float-end pt-5">
      <img
        className="pointer-events-none w-8 h-8"
        src={close}
        alt="close-icon"
      />
    </div>
  );
};

export default MenuClose;
