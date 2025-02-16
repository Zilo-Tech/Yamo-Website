import React from "react";

function ServiceCard({ title, desc, AwesomeIcon }) {
  return (
    <div className="service-item w-full max-w-[95%] sm:max-w-[98%] lg:w-full mx-auto h-96 flex flex-col items-center rounded-2xl pt-8 bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm hover:shadow-md group hover:border-transparent transition-all duration-300 ease-in-out transform hover:-translate-y-2">
      <div className="p-6 text-center flex-1 flex flex-col justify-center items-center">
        {/* Icon */}
        <div className="mb-8 p-5 bg-white rounded-xl shadow-md group-hover:bg-[#ff601c] group-hover:shadow-lg transition-all duration-300">
          <i
            className={`fa fa-3x ${AwesomeIcon} text-[#ff601c] group-hover:text-white transition-colors duration-300`}
          ></i>
        </div>

        {/* Title */}
        <h5 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 mb-4">
          {title}
        </h5>

        {/* Description */}
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed max-w-md">
          {desc}
        </p>
      </div>

      {/* Hover Effect Border */}
      <div className="w-0 h-1 bg-[#ff601c] mt-4 group-hover:w-full transition-all duration-500 ease-in-out"></div>
    </div>
  );
}

export default ServiceCard;