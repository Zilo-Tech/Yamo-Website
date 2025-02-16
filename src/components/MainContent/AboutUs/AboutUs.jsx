import React from "react";
import img1 from "../../../assets/about-1.jpg";
import img2 from "../../../assets/about-2.jpg";
import img3 from "../../../assets/about-3.jpg";
import img4 from "../../../assets/about-4.jpg";
import logo from "../../../assets/logo-bg.svg";

function AboutUs() {
  return (
    <div className="container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Image Grid Section */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <img
                  className="rounded-lg shadow-lg w-full h-64 object-cover transform transition duration-500 hover:scale-105"
                  src={img1}
                  alt="About Us 1"
                />
              </div>
              <div className="col-span-1">
                <img
                  className="rounded-lg shadow-lg w-full h-64 object-cover transform transition duration-500 hover:scale-105 mt-8"
                  src={img2}
                  alt="About Us 2"
                />
              </div>
              <div className="col-span-1">
                <img
                  className="rounded-lg shadow-lg w-full h-64 object-cover transform transition duration-500 hover:scale-105"
                  src={img3}
                  alt="About Us 3"
                />
              </div>
              <div className="col-span-1">
                <img
                  className="rounded-lg shadow-lg w-full h-64 object-cover transform transition duration-500 hover:scale-105 mt-8"
                  src={img4}
                  alt="About Us 4"
                />
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="lg:w-1/2 w-full">
            <h5 className="text-2xl font-semibold text-[#ff601c] mb-2">About Us</h5>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 flex items-center gap-2">
              <span>Welcome to</span>
              <img src={logo} width={50} alt="Logo" />
            </h1>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Welcome to Yamo Restaurant, where exceptional flavors meet a warm and inviting atmosphere.
              We take pride in serving delicious, carefully crafted dishes made from the finest ingredients.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Whether you're here for a casual meal, a special occasion, or a culinary adventure,
              Yano Restaurant offers an unforgettable dining experience with a menu that celebrates
              both tradition and innovation.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-md border-l-4 border-[#ff601c]">
                <h1 className="text-4xl font-bold text-[#ff601c] mr-4">15</h1>
                <div>
                  <p className="text-sm text-gray-600">Years of</p>
                  <h6 className="text-lg font-semibold uppercase">Experience</h6>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-md border-l-4 border-[#ff601c]">
                <h1 className="text-4xl font-bold text-[#ff601c] mr-4">50</h1>
                <div>
                  <p className="text-sm text-gray-600">Popular</p>
                  <h6 className="text-lg font-semibold uppercase">Master Chefs</h6>
                </div>
              </div>
            </div>

            {/* Read More Button */}
            <a
              href="#"
              className="inline-block bg-[#ff601c] text-white py-3 px-8 rounded-lg font-semibold hover:bg-[#e65a1a] transition duration-300"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;