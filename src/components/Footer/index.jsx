import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ChevronRight, Home, Info, Utensils, Lock } from 'lucide-react';
import yamo from  '../../assets/Ellipse 8.png';


const Footer = () => {
  const footerItems = [
    {
      title: "Company",
      links: [
        { name: "About Us", icon: <Info className="w-4 h-4" /> },
        { name: "Contact Us", icon: <Phone className="w-4 h-4" /> },
        { name: "Reservation", icon: <Utensils className="w-4 h-4" /> },
        { name: "Privacy Policy", icon: <Lock className="w-4 h-4" /> }
      ]
    },
    {
      title: "Contact",
      info: [
        { text: "Bamenda, Cameroon", icon: <MapPin className="w-4 h-4" /> },
        { text: "+237 681-775-574", icon: <Phone className="w-4 h-4" /> },
        { text: "info@zilotech.org", icon: <Mail className="w-4 h-4" /> }
      ],
      social: [
        { name: "Twitter", icon: "twitter", url: "#" },
        { name: "Facebook", icon: "facebook", url: "#" },
        { name: "YouTube", icon: "youtube", url: "#" },
        { name: "LinkedIn", icon: "linkedin", url: "#" }
      ]
    },
    {
      title: "Opening Hours",
      hours: [
        "Monday - Saturday: 09AM - 09PM",
        "Sunday: 10AM - 08PM"
      ],
      icon: <Clock className="w-5 h-5 text-[#ff601c]" />
    },
    {
      title: "Download Our App",
      description: "Use our app to book a table quickly and easily!",
      apps: [
        {
          name: "Google Play",
          url: "https://play.google.com/store",
          icon: "https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
        },
        {
          name: "App Store",
          url: "https://www.apple.com/app-store/",
          icon: "https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
        }
      ]
    }
  ];

  return (
    <motion.footer 
      className="mt-2 text-gray-800 bg-white  pb-6 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-[#ff601c] mb-4 flex items-center gap-2 text-gray-800">
                {item.icon && item.icon}
                {item.title}
              </h4>
              
              {item.links && (
                <ul className="space-y-3 text-gray-800">
                  {item.links.map((link, linkIndex) => (
                    <motion.li 
                      key={linkIndex}
                      whileHover={{ x: 5 }}
                    >
                      <a 
                        href="#" 
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-gray-800"
                      >
                        {link.icon}
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              )}

              {item.info && (
                <div className="space-y-3">
                  {item.info.map((info, infoIndex) => (
                    <div key={infoIndex} className="flex items-start gap-2 text-gray-800">
                      <span className="mt-0.5">{info.icon}</span>
                      <span>{info.text}</span>
                    </div>
                  ))}
                  <div className="flex gap-4 mt-4">
                    {item.social.map((social, socialIndex) => (
                      <motion.a
                        key={socialIndex}
                        href={social.url}
                        className="text-gray-800 hover:text-[#ff601c] transition-colors"
                        whileHover={{ y: -3 }}
                      >
                        <i className={`fab fa-${social.icon} text-xl`}></i>
                      </motion.a>
                    ))}
                  </div>
                </div>
              )}

              {item.hours && (
                <div className="space-y-2 text-gray-800">
                  {item.hours.map((hour, hourIndex) => (
                    <p key={hourIndex}>{hour}</p>
                  ))}
                </div>
              )}

              {item.description && (
                <div className="space-y-4">
                  <p className="text-gray-800">{item.description}</p>
                  <div className="flex flex-col gap-3">
                    {item.apps.map((app, appIndex) => (
                      <motion.a
                        key={appIndex}
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                      >
                        <img 
                          src={app.icon} 
                          alt={app.name} 
                          className="h-14 w-auto object-contain"
                        />
                      </motion.a>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Footer */}
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-800">
                &copy; {new Date().getFullYear()} <a href="#" className="hover:text-[#ff601c] transition-colors">Yamo</a>, All Rights Reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {['Home', 'Cookies', 'Help', 'FQAs'].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-800 hover:text-[#ff601c] transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <img src={yamo} className='absolute top-0'  alt="" />
    </motion.footer>
  );
};

export default Footer;