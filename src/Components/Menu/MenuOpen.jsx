import React from "react";
import open from "../../assets/icons/menu.png";

const MenuOpen = ({ handleopen }) => {
  return (
    <div onClick={handleopen}>
      <img className='pointer-events-none w-8 h-8' src={open} alt="open-icon" />
    </div>
  );
};

export default MenuOpen;
