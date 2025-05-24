import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import logo from "../../assets/logo-white.svg";
import logoYellow from "../../assets/logo-bg.svg";
import Hero from "./Hero/Hero";
import bg_hero from "../../assets/hero.avif";

function Header({ openModal, screenWidth, scrollHeight }) {
  return (
    <>
    <motion.div 
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg_hero})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <motion.header
        className={` top-0 left-0 right-0 z-[100] transition-all duration-300 border-b md:border-none shadow-xl py-3 rounded-xl`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="container sticky max-w-7xl mx-auto flex items-center justify-between px-2 lg:px-0">
          <motion.img
            src={scrollHeight <= 40 ? logoYellow : logo}
            alt="Yamo Logo"
            className="h-12 w-12 md:h-16 md:w-16"
            whileHover={{ rotate: 15 }}
          />
          <Navbar
            screenHeight={scrollHeight}
            screenWidth={screenWidth}
            openModal={openModal}
          />
        </div>
      </motion.header>
      
      <Hero />
    </motion.div>
    </>
  );
}

export default Header;