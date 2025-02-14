import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white pt-5 mt-5 overflow-hidden">
      <div className="container max-w-8xl mx-auto py-5 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Company Section */}
          <div>
            <h4 className="text-[#ff601c] font-semibold mb-4">Company</h4>
            <ul>
              <li><a className="text-white hover:text-[#ff601c]" href="#">About Us</a></li>
              <li><a className="text-white hover:text-[#ff601c]" href="#">Contact Us</a></li>
              <li><a className="text-white hover:text-[#ff601c]" href="#">Reservation</a></li>
              <li><a className="text-white hover:text-[#ff601c]" href="#">Privacy Policy</a></li>
              <li><a className="text-white hover:text-[#ff601c]" href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-[#ff601c] font-semibold mb-4">Contact</h4>
            <p className="mb-2"><i className="fa fa-map-marker-alt mr-3"></i>123 Street, New York, USA</p>
            <p className="mb-2"><i className="fa fa-phone-alt mr-3"></i>+012 345 67890</p>
            <p className="mb-2"><i className="fa fa-envelope mr-3"></i>info@example.com</p>
            <div className="flex space-x-4 mt-2">
              <a className="text-white hover:text-[#ff601c]" href="#"><i className="fab fa-twitter"></i></a>
              <a className="text-white hover:text-[#ff601c]" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="text-white hover:text-[#ff601c]" href="#"><i className="fab fa-youtube"></i></a>
              <a className="text-white hover:text-[#ff601c]" href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Opening Hours Section */}
          <div>
            <h4 className="text-[#ff601c] font-semibold mb-4">Opening Hours</h4>
            <p className="text-white">Monday - Saturday: 09AM - 09PM</p>
            <p className="text-white">Sunday: 10AM - 08PM</p>
          </div>

          {/* App Download Section */}
          <div>
            <h4 className="text-[#ff601c] font-semibold mb-4">Download Our App</h4>
            <p className="text-white mb-4">Use our app to book a table quickly and easily!</p>
            <div className="flex justify-center items-center space-x-4">
              {/* Google Play Store */}
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img 
                  src="data:image/png;base64,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" 
                  alt="Download on Google Play" 
                  className="w-36 h-auto object-contain"
                />
              </a>
              {/* Apple App Store */}
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" 
                  alt="Download on the App Store" 
                  className="w-36 h-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 container max-w-6xl mx-auto text-center text-white py-4 mt-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div>
            <p>&copy; <a className="border-b text-white hover:text-[#ff601c]" href="#">Yamo</a>, All Rights Reserved.</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <div className="space-x-4">
              <a className="text-white hover:text-[#ff601c]" href="#">Home</a>
              <a className="text-white hover:text-[#ff601c]" href="#">Cookies</a>
              <a className="text-white hover:text-[#ff601c]" href="#">Help</a>
              <a className="text-white hover:text-[#ff601c]" href="#">FQAs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
