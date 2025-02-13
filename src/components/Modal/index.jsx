import React, { useState } from "react";
import NavLinks from "../Header/Navbar/NavLinks";
import logo from "../../assets/logo-bg.svg";
import "./index.css";

function Modal({ closeModal }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal(); // Close the modal after the animation ends
      setIsClosing(false); // Reset for the next open
    }, 300); // Match this with the CSS animation duration
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] overflow-hidden">
      <div
        className={`bg-white p-5 shadow-lg w-[90%] rounded-lg ${
          isClosing ? "animate-slideOut" : "animate-slideIn"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <img src={logo} width={40} alt="Logo" />
          <button className="py-1 px-3 border rounded" onClick={handleClose}>
            <i className="fas fa-2x text-green-500 fa-times"></i>
          </button>
        </div>
        <NavLinks />
      </div>
    </div>
  );
}

export default Modal;
