import React from "react";
import { motion } from "framer-motion";
import { Download, Smartphone, Utensils, Home } from "lucide-react";
import yamo from '../../../assets/Yamo/Yamo Preview.jpg';

const YamoDownloadSection = () => {
  return (
    <motion.section 
      className=" border-none text-gray-800 rounded-lg py-12 lg:py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div 
          className="space-y-6 text-white"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4 text-gray-800">
            <Download className="w-8 h-8" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold ">
              Download Yamo App
            </h2>
          </div>
          
          <p className="text-lg md:text-xl leading-relaxed text-gray-800">
            Discover the ultimate food booking experience with <span className="font-bold">Yamo</span>, the go-to platform for ordering and selling delicious home-cooked meals across <span className="font-bold">Cameroon</span>.
          </p>

          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start gap-3">
              <Smartphone className="flex-shrink-0 mt-1 text-green-500" />
              <span>Browse hundreds of homemade meals from local chefs</span>
            </li>
            <li className="flex items-start gap-3">
              <Utensils className="flex-shrink-0 mt-1 text-green-500" />
              <span>Order your favorite dishes with just a few taps</span>
            </li>
            <li className="flex items-start gap-3">
              <Home className="flex-shrink-0 mt-1 text-green-500" />
              <span>Sell your homemade meals to food lovers nearby</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a 
              href="https://play.google.com/store/apps/details?id=com.yamo.ordering" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
                alt="Google Play Store"
                className="w-40 md:w-48 h-auto hover:opacity-90 transition-opacity"
              />
            </motion.a>
            <motion.a 
              href="https://apps.apple.com/us/app/yamo/id6472152357" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                alt="Apple App Store"
                className="w-40 md:w-48 h-auto hover:opacity-90 transition-opacity"
              />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex justify-center"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={yamo}
            alt="Yamo App Screenshot"
            className="w-full max-w-[280px] md:max-w-[340px] lg:max-w-[400px] rounded-xl shadow-2xl border-4 border-white"
            whileHover={{ y: -5 }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default YamoDownloadSection;