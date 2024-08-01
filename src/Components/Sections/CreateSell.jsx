import React from "react";
import SellList from "../SellList";
import sellimage1 from "../../assets/icons/sellimage1.png";
import sellimage2 from "../../assets/icons/sellimage2.png";
import sellimage3 from "../../assets/icons/sellimage3.png";
import sellimage4 from "../../assets/icons/sellimage4.png";

const CreateSell = () => {
  return (
    <section className="flex flex-col gap-9 pb-24">
      <h2 className="text-2xl sm:text-3xl font-bold">Create and Sell Now</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 px-5 sm:px-11 xl:px-0">
        <SellList
          image={sellimage1}
          title="Set up your wallet"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis"
        />
        <SellList
          image={sellimage2}
          title="Add your NFT’s"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis"
        />
        <SellList
          image={sellimage3}
          title="Promote your NFT’s"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis"
        />
        <SellList
          image={sellimage4}
          title="Sell your NFT’s"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis"
        />
      </div>
    </section>
  );
};

export default CreateSell;
