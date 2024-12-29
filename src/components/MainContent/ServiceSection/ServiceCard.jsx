import React from "react";

function ServiceCard({ title, desc, AwesomeIcon }) {
  return (
    <div className="service-item h-72 w-full flex flex-col items-center rounded pt-3 bg-white border shadow group hover:bg-orange-500 transition-all duration-300 ease-in-out">
      <div className="p-4 text-center flex-1 flex flex-col justify-center items-center">
        <i
          className={`fa fa-3x ${AwesomeIcon} mb-4 text-orange-500 group-hover:text-white transition-colors duration-300`}
        ></i>
        <h5 className="text-xl font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
          {title}
        </h5>
        <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
