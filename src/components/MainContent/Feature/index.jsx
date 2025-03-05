import React from 'react';
import ndole from '../../../assets/ndole.jpeg'

const YamoApp = () => {
  return (
    <div className="relative overflow-hidden  text-gray-800 rounded-flg my-20">


      {/* Content Container */}
      <div className="container mx-auto max-w-8xl px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Discover Yamo Section */}
        <div className="elementor-column text-center flex flex-col items-center">
          <div className="elementor-widget-wrap">
            <img
              src="https://cdn.tripinafrica.com/800x400/places/le-glacier-moderne-0zoZxeTKbl.webp"
              alt="Discover Yamo"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h2 className="text-2xl font-bold mb-4">Discover Yamo</h2>
            <p className="text-sm mb-6">
              The ultimate platform for restaurant owners to sell food directly to customers across Cameroon. Manage orders seamlessly and grow your business with Yamo.
            </p>
          </div>
        </div>

        {/* Join as a Restaurant Section */}
        <div className="elementor-column text-center flex flex-col items-center">
          <div className="elementor-widget-wrap">
            <img
              src={ndole                                                                                                                  }
              alt="Join as a Restaurant"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h2 className="text-2xl font-bold mb-4">Join as a Restaurant</h2>
            <p className="text-sm mb-6">
              Expand your reach and connect with more customers by listing your restaurant on Yamo. Enjoy easy order management and increased sales.
            </p>
            <a
              href="/restaurant-signup"
              className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Sign Up Now
            </a>
          </div>
        </div>

        {/* Order Your Favorite Meals Section */}
        <div className="elementor-column text-center flex flex-col items-center">
          <div className="elementor-widget-wrap">
            <img
              src="https://plus.unsplash.com/premium_photo-1712736395898-02844eeb1968?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtZXJvb24lMjAlMjByZXN0YXVyYW50c3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Order Your Favorite Meals"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h2 className="text-2xl font-bold mb-4">Order Your Favorite Meals</h2>
            <p className="text-sm mb-6">
              Browse restaurants, order your favorite meals, and enjoy quick and reliable delivery with Yamo.
            </p>
            <a
              href="/download-yamo"
              className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Download Yamo
            </a>
          </div>
        </div>
      </div>


    </div>
  );
};

export default YamoApp;