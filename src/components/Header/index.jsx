import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/index";
import logo from "../../assets/logo-white.svg";
import logoYellow from "../../assets/logo-bg.svg";
import Hero from "./Hero/Hero";
import bg_hero from "../../assets/hero.svg"; // Import background image

function Header({ openModal, screenWidth, scrollHeight }) {
  console.log(scrollHeight);
  return (
    <div
      className="relative h-fit bg-cover bg-center border"
      style={{ backgroundImage: `url(${bg_hero})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div
        className={`transition-all duration-300 ease-in-out fixed top-0 left-0 right-0 z-[100] ${
          scrollHeight <= 40
            ? "py-2 text-white"
            : "bg-orange-500 opacity-90 py-2 text-white"
        }`}
      >
        <div className="container max-w-6xl mx-auto flex md:gap-5 items-center justify-between px-2 ">
          <img
            src={scrollHeight <= 40 ? logoYellow : logo}
            alt="Yamo-logo"
            className="h-10 w-10 sm:h-16 sm:w-10 lg:h-20 lg:w-20"
          />
          <Navbar
            screenHeight={scrollHeight}
            screenWidth={screenWidth}
            openModal={openModal}
          />
        </div>
      </div>
      <Hero />
    </div>
  );
}

export default Header;
