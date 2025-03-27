import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

function ServiceCard({ title, desc, Icon }) {
  return (
    <motion.div
      className="w-full h-[420px] flex flex-col items-center rounded-2xl pt-8 bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm hover:shadow-md group overflow-hidden"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6 text-center flex flex-col items-center h-full w-full">
        {/* Icon with animation */}
        <motion.div
          className="mb-6 p-4 bg-white rounded-xl shadow-md group-hover:bg-[#ff601c] transition-all duration-300"
          whileHover={{ rotate: 15, scale: 1.1 }}
        >
          <Icon className="w-8 h-8 text-[#ff601c] group-hover:text-white transition-colors duration-300" />
        </motion.div>

        {/* Title */}
        <h5 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 mb-3 px-4 line-clamp-2">
          {title}
        </h5>

        {/* Description */}
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed px-4 line-clamp-4 mb-4 flex-grow">
          {desc}
        </p>

        {/* Learn more link */}
        <motion.div
          className="flex items-center mt-auto mb-6 text-[#ff601c] font-medium"
          whileHover={{ x: 5 }}
        >
          <span>Learn more</span>
          <ChevronRight className="ml-1 w-5 h-5" />
        </motion.div>
      </div>

      {/* Animated border */}
      <motion.div
        className="w-0 h-1 bg-[#ff601c]"
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}

export default ServiceCard;