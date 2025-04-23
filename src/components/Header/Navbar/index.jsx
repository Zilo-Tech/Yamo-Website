import React from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import NavLinks from "./NavLinks";

function Navbar({ screenWidth, screenHeight, openModal }) {
  return (
    <>
      {screenWidth <= 680 ? (
        <motion.button 
          onClick={openModal} 
          className="p-2 rounded-lg  hover:bg-white/20 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Menu className="w-6 h-6 text-white" />
        </motion.button>
      ) : (
        <NavLinks screenHeight={screenHeight} />
      )}
    </>
  );
}

export default Navbar;