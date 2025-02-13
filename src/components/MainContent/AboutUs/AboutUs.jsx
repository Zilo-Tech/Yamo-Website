import React from "react";
import img1 from "../../../assets/about-1.jpg";
import img2 from "../../../assets/about-2.jpg";
import img3 from "../../../assets/about-3.jpg";
import img4 from "../../../assets/about-4.jpg";
import logo from "../../../assets/logo-bg.svg";

function AboutUs() {
  return (
    <div className="py-16">
      <div className="container  mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row items-center justify-center">
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-1 text-left">
                <img
                  className="img-fluid rounded w-full transition-transform transform hover:scale-105"
                  src={img1}
                  alt="About Us 1"
                />
              </div>
              <div className="col-span-1 text-left">
                <img
                  className="img-fluid rounded w-3/4 mt-6 transition-transform transform hover:scale-105"
                  src={img2}
                  alt="About Us 2"
                />
              </div>
              <div className="col-span-1 text-right">
                <img
                  className="img-fluid rounded w-3/4 transition-transform transform hover:scale-105"
                  src={img3}
                  alt="About Us 3"
                />
              </div>
              <div className="col-span-1 text-right">
                <img
                  className="img-fluid rounded w-full transition-transform transform hover:scale-105"
                  src={img4}
                  alt="About Us 4"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <h5 className="text-2xl font-semibold text-orange-500">About Us</h5>
            <h1 className="mb-4 text-4xl font-bold flex items-center gap-2">
              <span>Welcome to</span>
              <img src={logo} width={40} alt="" />
            </h1>
            <p className="mb-4 text-gray-800 font-semibold">
  Welcome to Yamo Restaurant, where exceptional flavors meet a warm and inviting atmosphere. 
  We take pride in serving delicious, carefully crafted dishes made from the finest ingredients.
</p>
<p className="mb-4 text-gray-800 font-semibold">
  Whether you're here for a casual meal, a special occasion, or a culinary adventure, 
  Yano Restaurant offers an unforgettable dining experience with a menu that celebrates 
  both tradition and innovation.
</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center border-l-4 border-orange-500 pl-4">
                <h1 className="flex-shrink-0 text-4xl text-orange-500 mb-0">
                  15
                </h1>
                <div className="pl-4">
                  <p className="mb-0">Years of</p>
                  <h6 className="uppercase mb-0">Experience</h6>
                </div>
              </div>
              <div className="flex items-center border-l-4 border-orange-500 pl-4">
                <h1 className="flex-shrink-0 text-4xl text-orange-500 mb-0">
                  50
                </h1>
                <div className="pl-4">
                  <p className="mb-0">Popular</p>
                  <h6 className="uppercase mb-0">Master Chefs</h6>
                </div>
              </div>
            </div>
            <a
              className="btn rounded-lg bg-orange-500 text-white py-3 px-6 mt-2 inline-block"
              href=""
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
