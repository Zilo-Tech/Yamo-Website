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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full justify-between mt-10">
      {data.map((service) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          desc={service.desc}
          AwesomeIcon={service.icon}
        />
      ))}
    </div>
  );
}

export default ServiceList;
