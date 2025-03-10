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
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3, slidesToScroll: 1, dots: true }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2, slidesToScroll: 1 }
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, slidesToScroll: 1 }
    },
  ],
};

export default function CardList() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  const Title = () => (
    <div className="text-center mt-10 mb-10">
      <h2 className="text-3xl border-b-4 border-green-500 w-fit mx-auto font-semibold text-gray-800 mb-2">
        Top Restaurants
      </h2>
      <p className="text-gray-800 md:text-xl">
        From gourmet cuisines to cozy cafés, <br /> explore restaurants that redefine taste and hospitality.
        Find your next favorite spot today!
      </p>
    </div>
  );

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const { data } = await axios.get('https://yamo-api-endpoints.onrender.com/api/restaurants/');
        console.log('Fetched restaurants:', data.results);
        setRestaurants(data.results || []);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      } finally {
        setTimeout(() => setLoading(false), 3000); // Reduced timeout for better UX
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) {
    return (
      <div className='container max-w-8xl mx-auto px-4'>
        <div className='max-w-8xl mx-auto px-3'>
          <Title />
          <Slider {...settings}>
            {Array.from({ length: 3 }).map((_, index) => (
              <Cards key={index} name={``} location={``} restaurant_image={``} followers_count={``} loading={loading} />
            ))}
          </Slider>
        </div>
      </div>
    );
  }

  console.log('Restaurants to display:', restaurants);

  return (
    <div className="container max-w-8xl mx-auto px-4">
      <div className="max-w-8xl mx-auto px-3">
        <Title />
        <Slider {...settings}>
          {restaurants.map((restaurant, index) => (
            <Cards {...restaurant} key={restaurant.id || index} loading={loading} />
          ))}
        </Slider>
      </div>
    </div>
  );
}