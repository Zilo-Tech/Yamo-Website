import './cardAnimation.css'

export default function Cards({name, location, followers_count, is_verified,  restaurant_image, loading}) {
    return (
      <div id="restaurantCard" className="w-full max-w-[95%] sm:max-w-[98%] lg:w-full h-[380px] mx-auto border hover:border-[#ff601c] rounded-lg bg-white">
          <div className={` image-wrapper p-1 w-full`}>
              <img 
                  id="restaurantImage" 
                  className={`${loading ? 'skeleton' : ''} w-full h-52 rounded-t-lg object-cover object-center`}
                  src={restaurant_image} 
                  alt="" 
              />
          </div>
          <div className="cardInfo p-2 text-center text-gray-800 w-full">
              <div className={`${loading ? 'skeleton' : ''} flex items-center space-x-2 justify-center  h-[40px] mb-2`}>
                  <p id='restaurant_name' className="font-semibold text-gray-800 text-xl">{name}</p>
                  {is_verified && <i className={`${loading ? '' : 'ri-verified-badge-fill text-green-500'}`}></i>}
              </div>
              <div className={`${loading ? 'skeleton' : ''} location-wrap mb-2 flex items-center justify-center space-x-2 h-[20px]`}>
                  <i className={`${loading ? '' : 'fas fa-map-marker-alt text-green-500'}`}></i>
                  <p id='location'>{location}</p>
              </div>
             
              <div className={`${loading ? 'skeleton' : ''} followers-wrap mb-2 flex items-center justify-center space-x-2 h-[20px]`}>
                  <p id="followers_count">{followers_count}</p>
                  <span>{loading ? '' : 'followers'}</span>
              </div>
              <div className={`${loading ? 'skeleton' : ''} contact-wrap mt-4 w-full`}>
                  <a href="#" id="bookTable" className={`${loading ? 'bg-transparent' : 'bg-green-300'} font-semibold px-4 py-2 rounded-lg text-green-500`}>{loading ? '' : 'Book a Table'}</a>
              </div>
          </div>
      </div>
    )
  }
  