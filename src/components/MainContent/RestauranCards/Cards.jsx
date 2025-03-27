import { motion } from 'framer-motion';
import { MapPin, Users, Star, CalendarDays } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  hover: {
    y: -5,
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

const SkeletonElement = ({ className }) => (
  <div className={`bg-gray-200 rounded-md animate-pulse ${className}`} />
);

export default function Cards({ 
  name = '', 
  location = '', 
  followers_count = '', 
  is_verified = false, 
  restaurant_image = '', 
  loading = false 
}) {
  return (
    <motion.div
      className="w-full max-w-[95%] sm:max-w-[98%] lg:w-full h-[400px] mx-auto border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm hover:shadow-md"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={loading ? {} : "hover"}
    >
      {/* Image Section */}
      <div className="h-52 border border-gray-300 w-full overflow-hidden">
        {loading ? (
          <SkeletonElement className="h-full w-full" />
        ) : (
          <motion.img
            className="h-full w-full object-cover"
            src={restaurant_image}
            alt={name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            loading="lazy"
          />
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-4">
        {/* Name */}
        <div className="flex items-center justify-center h-8 mb-3">
          {loading ? (
            <SkeletonElement className="h-6 w-3/4" />
          ) : (
            <>
              <h3 className="font-bold text-lg text-gray-800 truncate max-w-[80%]">
                {name}
              </h3>
              {is_verified && (
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.7, repeat: Infinity, repeatDelay: 3 }}
                  className="ml-1"
                >
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </motion.span>
              )}
            </>
          )}
        </div>
        
        {/* Location */}
        <div className="flex items-center justify-center h-5 mb-2">
          {loading ? (
            <SkeletonElement className="h-4 w-1/2" />
          ) : (
            <>
              <MapPin className="w-4 h-4 text-green-500 mr-1" />
              <p className="text-gray-600 text-sm truncate max-w-[80%]">
                {location}
              </p>
            </>
          )}
        </div>
        
        {/* Followers */}
        <div className="flex items-center justify-center h-5 mb-4">
          {loading ? (
            <SkeletonElement className="h-4 w-1/3" />
          ) : (
            <>
              <Users className="w-4 h-4 text-green-500 mr-1" />
              <p className="text-gray-600 text-sm">
                {followers_count} followers
              </p>
            </>
          )}
        </div>
        
        {/* Button */}
        <div className="h-10">
          {loading ? (
            <SkeletonElement className="h-9 w-3/4 mx-auto rounded-lg" />
          ) : (
            <motion.a
              href="#"
              className="bg-gradient-to-r from-green-400 to-green-500 font-medium px-5 py-2 rounded-lg text-white flex items-center  justify-center gap-1 w-3/4 mx-auto"
            
            >
              <CalendarDays className="w-4 h-4" />
              Book Table
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}