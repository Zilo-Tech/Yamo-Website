import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Slider settings with autoplay enabled
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true, // Enable autoplay
  autoplaySpeed: 3000, // Set autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
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



export default function CardList() {
  let [restaurants, setRestaurants] = useState([{}, {}, {}, {}]);
  const [loading, setLoading] = useState(true);
  const Title = () => {
    return(
        <div className='text-center mt-10 mb-5' >
            <h2 className='text-3xl border-b-4 border-green-500 w-fit mx-auto font-semibold text-gray-800 text-center mb-2'>Top Restaurants</h2>
            <p className='text-gray-800 text-wrap text-center'>From gourmet cuisines to cozy cafés, explore restaurants that redefine taste and hospitality. Find your next favorite spot today!</p>
        </div>
    )
  };
  

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

  if (loading) {
    return (
      <div className='max-w-6xl mx-auto px-4'>
        <Title />
        <Slider {...settings}>
          {restaurants.map((restaurant, index) => (
            <Cards key={index} name={``} location={``} restaurant_image={``} followers_count={``} loading={loading} />
          ))}
        </Slider>
      </div>
    );
  }

  return (
    <div className='container max-w-6xl mx-auto px-4'>
      <Title />
      <Slider {...settings}>
        {restaurants.slice(0, 4).map((restaurant) => (
          <Cards key={restaurant.id} {...restaurant} />
        ))}
      </Slider>
    </div>
  );
}