import React from "react";

const JoinUs = () => {
  return (
    <section className="relative z-0 bg-join text-center text-white h-80 rounded-2xl">
      <div className="bg-black bg-opacity-50 h-80 py-16 md:py-12 flex flex-col items-center gap-10 rounded-2xl">
        <h2 className="text-2xl sm:text-5xl xl:text-6xl font-medium">Build your NFT profile</h2>
        <p className="font-semibold text-xs sm:text-xl">
          Join almost 10k NFT profiles on Digit !
        </p>
        <a
          href="#"
          className="font-semibold bg-white text-black hover:text-white hover:bg-black rounded-full w-36 px-6 py-3"
        >
          Sign up now
        </a>
      </div>
    </section>
  );
};

export default JoinUs;
