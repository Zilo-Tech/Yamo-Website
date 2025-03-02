import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import MainContent from "./components/MainContent";
import Footer from './components/Footer'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [scrollHeight, setScrollHeight] = useState(window.scrollY);
  console.log(screenWidth);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth > 680 && isModalOpen) {
        closeModal(); // Automatically close modal on larger screens
        document.body.style.overflow = "auto"; // Re-enable scroll
      }
    };

    const handleScroll = () => setScrollHeight(window.scrollY);

    // Handle overflow for small screens when modal is open
    if (screenWidth <= 680 && isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto"; // Cleanup overflow on unmount
    };
  }, [screenWidth, isModalOpen]);

  return (
    <div>
      <Header
        openModal={openModal}
        screenWidth={screenWidth}
        scrollHeight={scrollHeight}
      />
      {isModalOpen && screenWidth <= 680 && <Modal closeModal={closeModal} />}
      <MainContent />
      <Footer/>
    </div>
  );
}

export default App;
