import React from "react";
import { motion } from "framer-motion";
import { Utensils, ShoppingBasket, Bike, Lock } from "lucide-react";
import ServiceCard from "./ServiceCard";

function ServiceList() {
  const data = [
    {
      title: "Sell Your Dishes",
      desc: "Home cooks and professional chefs can list and sell their delicious meals to a wide audience.",
      Icon: Utensils,
    },
    {
      title: "Order Meals",
      desc: "Discover and order freshly prepared dishes from talented local cooks and top tier restaurants near you.",
      Icon: ShoppingBasket,
    },
    {
      title: "Fast & Reliable Delivery",
      desc: "Get your favorite meals delivered quickly, ensuring freshness and quality at your doorstep.",
      Icon: Bike,
    },
    {
      title: "Secure Payments",
      desc: "Seamless and secure payment options for both buyers and sellers, ensuring smooth transactions.",
      Icon: Lock,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-orange-50 to-green-[#ff601c] py-28 relative overflow-hidden   rounded-3xl">
    
    

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-3">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-10">
            Discover what we offer to enhance your culinary experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={service.title}
                desc={service.desc}
                Icon={service.Icon}
              />
            </motion.div>
          ))}
        </div>
      </div>

     
    </div>
  );
}

export default ServiceList;