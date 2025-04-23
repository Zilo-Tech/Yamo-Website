import React from "react";
import { motion } from "framer-motion";
import { Utensils, ChevronRight } from "lucide-react";
import hero from "../../../assets/hero.webp";

export default function Hero() {
  return (
    <motion.section 
      className="relative overflow-hidden  py-24 md:py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
        {/* Text Content */}
        <motion.div
          className="text-center lg:text-left max-w-2xl lg:max-w-none"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center lg:justify-start gap-3 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Utensils className="w-8 h-8 text-white" />
            </motion.div>
            <span className="text-lg font-medium text-white/90">Yamo - Food Delivery</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Experience Flavors <br className="hidden lg:block" /> Beyond Compare
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto lg:mx-0"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Indulge in our exquisite cuisine, crafted with passion and the finest ingredients. 
            Join us for a culinary journey that delights every palate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 bg-[#ff601c] text-white hover:bg-gray-100 font-semibold text-lg py-4 px-8 rounded-lg shadow-lg transition-colors"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Yamo
              
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Hero Image with Infinite Rotation */}
        <motion.div
          className="relative w-full max-w-2xl"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="origin-center"
          >
            <motion.img
              src={hero}
              alt="Delicious Food"
              className="w-full h-auto object-contain rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div
            className="absolute -z-10 w-full h-full  rounded-lg -bottom-4 -right-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>

      {/* Rotating Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </motion.section>
  );
}