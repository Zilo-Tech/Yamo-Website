import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChefHat, ChevronRight, ChevronLeft } from 'lucide-react';
import Cards from './Cards';
import { div } from 'framer-motion/client';
import Delivery from '../../../assets/Delivery.png'
import tracking from '../../../assets/tracking .png'
import yamo from '../../../assets/Ellipse 9.png';



const NextArrow = (props) => (
  <div {...props} className="slick-next-arrow">
    <ChevronRight className="w-6 h-6 text-white bg-green-500 rounded-full p-1" />
  </div>
);

const PrevArrow = (props) => (
  <div {...props} className="slick-prev-arrow">
    <ChevronLeft className="w-6 h-6 text-white bg-green-500 rounded-full p-1" />
  </div>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function CardList() {
  const [restaurants, setRestaurants] = useState([]); // Initialize with empty objects for skeletons
  const [loading, setLoading] = useState(true);

  const Title = () => (
    <motion.div
      className='text-center mt-10 mb-10'
    >
      <div className="flex items-center justify-center gap-2 mb-4">
        <ChefHat className="w-8 h-8 text-green-500" />
        <h2 className='text-3xl font-semibold text-gray-800 text-center'>
          Top Restaurants
        </h2>
      </div>
      <motion.p

        className='text-gray-600 text-wrap text-center md:text-lg max-w-2xl mx-auto'
      >
        From gourmet cuisines to cozy cafés, explore restaurants that redefine taste and hospitality.
      </motion.p>
    </motion.div>
  );


  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const { data } = await axios.get('https://yamo-api-endpoints.onrender.com/api/restaurants/');
        setRestaurants(data.results || restaurants);
      } catch (error) {
        console.error('Error fetching Restaurants', error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 10000);
      }
    };
    fetchRestaurants();
  }, []);
  return (
    <div className=' bg-gradient-to-y from-[#ff601c22]] border-none relative'>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className=' w-full   py-8'
      >
        <div className='w-full max-w-7xl mx-auto px-3'>
          <Title />
          <Slider {...settings}>
            {restaurants.map((restaurant, index) => (
              <Cards
                key={loading ? `skeleton-${index}` : restaurant.id}
                loading={loading}
                {...restaurant}
              />
            ))}
          </Slider>
        </div>
      </motion.div>
      <img

      />

      <div className=' hidden lg:block mx-auto absolute -top-16 left-0'>
        <motion.img
          src={Delivery}
          alt="Tracking illustration"
          className="f"
          animate={{
            x: ["100%", "-100%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
        <img src={yamo} className='absolute' alt="" />
        <img src={yamo} className='absolute left-1/2 bottom-0' alt="" />
      </div>
    </div>
  );
}