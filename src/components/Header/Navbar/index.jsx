import React from "react";
import NavLinks from "./NavLinks";

function Navbar({ screenWidth, screenHeight, openModal }) {
  return (
    <>
      {screenWidth <= 680 ? (
        <button onClick={openModal} className="border px-2 py-1 rounded">
          <i className="fas fa-lg fa-bars text-white"></i>
        </button>
      ) : (
        <NavLinks screenHeight={screenHeight}/>
      )}
    </>
  );
}

export default Navbar;
