import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, Info, Phone, Utensils } from "lucide-react";

function NavLinks({ screenHeight }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { name: "Home", icon: <Home className="w-5 h-5" /> },
    { name: "About", icon: <Info className="w-5 h-5" /> },
    { name: "Contact", icon: <Phone className="w-5 h-5" /> }
  ];

  return (
    <motion.ul 
      className={`flex ${screenWidth <= 680 ? "flex-col gap-4 p-4" : "flex-row gap-8 items-center"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {links.map((link) => (
        <motion.li key={link.name} whileHover={{ y: -2 }}>
          <a
            href="#"
            className={`group font-medium flex items-center transition-colors ${
              activeLink === link.name 
                ? "text-green-500 sm:text-white" 
                : "text-gray-800 sm:text-white hover:text-green-400"
            }`}
            onClick={() => setActiveLink(link.name)}
          >
            {screenWidth <= 680 && (
              <span className="mr-2 group-hover:text-green-400">
                {link.icon}
              </span>
            )}
            {link.name}
          </a>
        </motion.li>
      ))}
      
      <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <button
          href="#"
          className={`py-2 px-6 rounded-lg text-white font-semibold text-xs  bg-[#ff601c] `}
        >
          <span className="flex items-center gap-2">
            
            Download
          </span>
        </button>
      </motion.li>
    </motion.ul>
  );
}

export default NavLinks;