import React from "react";
import { motion } from "framer-motion";
import { Utensils, Users, Clock, Award } from "lucide-react";
import img1 from "../../../assets/Find food you love vector 1-1.svg";
import img2 from "../../../assets/Add an item After.jpg";
import img3 from "../../../assets/Buy Now.jpg";
import img4 from "../../../assets/about-4.jpg";
import logo from "../../../assets/logo-bg.svg";
import { div } from "framer-motion/client";
import yamo from '../../../assets/Ellipse 9.png';


function AboutUs() {
  return (
    <div className=" relative">
      <img src={yamo} className="absolute" alt="" />
      <img src={yamo} className="absolute right-0" alt="" />
      <img src={yamo} className="absolute top-1/2 left-1/2" alt="" />
       <motion.div 
      className="container max-w-7xl mx-auto px-4 py-16 lg:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Image Grid Section */}
        <motion.div 
          className="lg:w-1/2 w-full"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring" }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 gap-4">
            {[img1, img2,].map((img, index) => (
              <motion.div
                key={index}
                className={`relative overflow- rounded-xl${index % 2 === 1 ? 'mt-8' : ''}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={img}
                  alt={`About Us ${index + 1}`}
                  className="w-full h-64 md:h-auto object-"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 " />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Text Content Section */}
        <motion.div 
          className="lg:w-1/2 w-full"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-[#ff601c] rounded-full" />
              <span className="text-lg font-medium text-[#ff601c]">About Us</span>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 flex items-center gap-3">
              <span>Welcome to</span>
              <motion.img 
                src={logo} 
                width={50} 
                alt="Yamo Logo" 
                whileHover={{ rotate: 15 }}
              />
            </h1>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Welcome to Yamo, the ultimate platform for food lovers in Cameroon! Yamo connects you with the best local restaurants and small food businesses, allowing you to easily book delicious, ready-to-eat meals and have them delivered straight to your location.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For restaurants and food vendors, Yamo provides a powerful tool to showcase your culinary creations, reach more customers, and grow your business. Whether you're craving traditional Cameroonian dishes or exploring new flavors, Yamo brings the best of local cuisine right to your doorstep.
              </p>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            {[
              { value: "2k+", label: "Satisfied Clients", icon: <Users className="w-6 h-6 text-[#ff601c]" /> },
              { value: "50+", label: "Active Restaurants", icon: <Utensils className="w-6 h-6 text-[#ff601c]" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center p-4 bg-white rounded-xl shadow-sm border-l-4 border-[#ff601c]"
                whileHover={{ y: -3 }}
              >
                <div className="p-3 bg-orange-50 rounded-lg mr-4">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Read More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 bg-[#ff601c] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#e65a1a] transition-colors"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
              <Award className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
    </div>
   
  );
}

export default AboutUs;