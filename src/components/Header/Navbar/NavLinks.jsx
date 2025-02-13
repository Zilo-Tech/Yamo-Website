import React, { useEffect, useState } from "react";

function NavLinks({ screenHeight }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [activeLink, setActiveLink] = useState("Home");

  // Update screenWidth on window resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <ul
      className={`flex ${
        screenWidth <= 680
          ? "flex-col gap-4 p-2 text-orange-500"
          : "flex-row gap-10"
      }`}
    >
      <li>
        <a
          href="#"
          className={`group font-semibold flex items-center hover:text-green-500 ${
            activeLink === "Home" ? "text-green-500" : ""
          }`}
          onClick={() => handleActiveLink("Home")}
        >
          <i
            className={`${
              screenWidth <= 680 ? "fas fa-home fa-lg mr-2" : ""
            } group-hover:text-green-500 transition-colors`}
          ></i>
          Home
        </a>
      </li>
      <li>
        <a
          href="#"
          className={`group font-semibold flex items-center hover:text-green-500 ${
            activeLink === "About" ? "text-green-500" : ""
          }`}
          onClick={() => handleActiveLink("About")}
        >
          <i
            className={`${
              screenWidth <= 680 ? "fas fa-info-circle fa-lg mr-2" : ""
            } group-hover:text-green-500 transition-colors`}
          ></i>
          About
        </a>
      </li>
      <li>
        <a
          href="#"
          className={`group font-semibold flex items-center hover:text-green-500 ${
            activeLink === "Contact" ? "text-green-500" : ""
          }`}
          onClick={() => handleActiveLink("Contact")}
        >
          <i
            className={` ${
              screenWidth <= 680 ? "fas fa-phone-alt fa-lg mr-2" : ""
            } group-hover:text-green-500 transition-colors`}
          ></i>
          Contact
        </a>
      </li>
      <li>
        <a
          href="#"
          className={`py-2 px-6 rounded text-white font-semibold ${
            screenHeight <= 40 || screenWidth <= 680
              ? "bg-orange-500"
              : "bg-green-500"
          } text-center w-full`}
        >
          Book a Table
        </a>
      </li>
    </ul>
  );
}

export default NavLinks;
