import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Store, Smartphone, ArrowRight } from 'lucide-react';
import ndole from '../../../assets/ndole.jpeg';
import yamo from '../../../assets/Ellipse 8.png';


const YamoApp = () => {
  const cards = [
    {
      title: "Discover Yamo",
      description: "The ultimate platform for restaurant owners to sell food directly to customers across Cameroon. Manage orders seamlessly and grow your business with Yamo.",
      image: "https://cdn.tripinafrica.com/800x400/places/le-glacier-moderne-0zoZxeTKbl.webp",
      icon: <Utensils className="w-6 h-6 text-white" />,
      button: {
        text: "Learn More",
        link: "/discover-yamo"
      }
    },
    {
      title: "Join as a Restaurant",
      description: "Expand your reach and connect with more customers by listing your restaurant on Yamo. Enjoy easy order management and increased sales.",
      image: ndole,
      icon: <Store className="w-6 h-6 text-white" />,
      button: {
        text: "Sign Up Now",
        link: "/restaurant-signup"
      }
    },
    {
      title: "Order Your Favorite Meals",
      description: "Browse restaurants, order your favorite meals, and enjoy quick and reliable delivery with Yamo.",
      image: "https://plus.unsplash.com/premium_photo-1712736395898-02844eeb1968?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtZXJvb24lMjAlMjByZXN0YXVyYW50c3xlbnwwfHwwfHx8MA%3D%3D",
      icon: <Smartphone className="w-6 h-6 text-white" />,
      button: {
        text: "Download Yamo",
        link: "/download-yamo"
      }
    }
  ];

  return (
    <motion.div 
      className="relative overflow-hidden border-none rounded-xl my-20 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}

    >
<img src={yamo} alt="" className="absolute -left-32 top-32 rotate-90" />

      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-48 rounded-lg overflow-hidden mb-6 group">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-4">
                  <div className="w-12 h-12 bg-[#ff601c] rounded-full flex items-center justify-center -mb-6">
                    {card.icon}
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-800">{card.title}</h3>
              <p className="text-gray-600 mb-6 px-4">{card.description}</p>
              
              <motion.a
                href={card.button.link}
                className="inline-flex items-center gap-2 bg-[#ff601c] text-white px-6 py-3 rounded-lg hover:bg-[#e5561a] transition-colors"
                whileHover={{ x: 5 }}
              >
                {card.button.text}
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
      <img src={yamo} alt="" className="absolute -bottom-32 right-0" />

    </motion.div>
  );
};

export default YamoApp;