import React from "react";
import ServiceCard from "./ServiceCard";


const data = [
  {
    title: "Master Chefs",
    desc: "Our team of expert chefs brings a world of flavors to your plate, ensuring an unforgettable dining experience.",
    icon: "fa-user-tie",
  },
  {
    title: "Quality Service",
    desc: "We strive to provide top-notch service that exceeds customer expectations.",
    icon: "fa-cogs",
  },
  {
    title: "Online Ordering",
    desc: "Order your favorite meals from anywhere, anytime, with our easy-to-use online system.",
    icon: "fa-shopping-cart",
  },
  {
    title: "24/7 Service",
    desc: "Enjoy round-the-clock service for all your dining needs, no matter the time of day.",
    icon: "fa-clock",
  },
];

function ServiceList() {
  return (
    <div className="bg-green-100 mt-10 relative  pt-28 rounded-b-lg min-h-screen">
      {/* Wavy Background */}
      <svg
        className="absolute -top-10 left-0 w-full"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="white"
          fillOpacity="1"
          d="M0,96L48,101.3C96,107,192,117,288,144C384,171,480,213,576,208C672,203,768,149,864,133.3C960,117,1056,139,1152,154.7C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>
      <div className="container max-w-8xl mx-auto px-4">



        <div className="relative container mx-auto px-5">
          <h2 className="text-3xl font-bold text-center text-green-600">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Discover what we offer to enhance your experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                desc={service.desc}
                AwesomeIcon={service.icon}
              />
            ))}
          </div>
        </div>


      </div>

      {/* Bottom Wavy Background */}
      <svg
        className="absolute -bottom-32 left-0 w-full"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="white"
          fillOpacity="1"
          d="M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,165.3C672,171,768,181,864,186.7C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
}

export default ServiceList;
