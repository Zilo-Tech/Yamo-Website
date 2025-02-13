import React from "react";
import yamo from '../../../assets/Yamo/Yamo Preview.jpg'

const YamoDownloadSection = () => {

  return (
    <section className="bg-green-500 rounded-lg">
      <div className="container max-w-6xl mx-auto px-4 mt-16 text-white py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Download Yamo App</h2>
          <p className="">
            Experience top-tier delivery services with <b>Yamo</b>, your go-to platform for
            <b> food</b> and <b>drinks</b>, catering to the bustling cities of
            <strong> Douala, Buea, and Limbe</strong>. Enjoy seamless ordering and fast delivery from your favorite local restaurants, anytime, anywhere.
          </p>
          <div className="flex gap-4  items-center">
            <a href="https://play.google.com/store/apps/details?id=com.yamo.ordering" target="_blank" rel="noopener noreferrer">
              <img
                src="data:image/png;base64,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"
                alt="Google Play Store"
                className="w-48 md:w-56 hover:opacity-80 transition-opacity"
              />
            </a>
            <a href="https://apps.apple.com/us/app/yamo/id6472152357" target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                alt="Apple App Store"
                className="w-48 md:w-56 hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center rounded-lg">
          <img
            src={yamo}
            alt="Yamo App Screenshot"
            className="w-[322px] md:w-[386px] lg:w-[450px] object-center object-fit rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default YamoDownloadSection;
