import React from "react";
import hero from "../../../assets/hero.png";

export default function Hero() {
  return (
    <div className="container max-w-6xl mx-auto py-32 md:pb-0 flex flex-col items-center justify-center md:px-4">
      <div className="relative flex flex-col lg:flex-row items-center justify-center text-center text-white px-4 z-10 gap-10">
        <div className="hero-header flex flex-col items-center md:items-start text-center md:text-start space-y-10">
          <div className="hero-text space-y-2">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Experience Flavors Beyond Compare
            </div>
            <div>
              Indulge in our exquisite cuisine, crafted with passion and the finest ingredients. Join us for a culinary journey that delights every palate.
            </div>
          </div>
          <button className="py-2 px-4 md:text-xl lg:text-2xl bg-green-500 font-semibold rounded shadow-xl">
            View Menu
          </button>
        </div>
        <div className="heroImage-wrap w-[95%]">
          <img src={hero} alt="Delicious Food" />
        </div>
      </div>
    </div>
  );
}
