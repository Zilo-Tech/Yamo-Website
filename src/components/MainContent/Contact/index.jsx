import { motion } from 'framer-motion'
import { ChefHat, MapPin, Users, Star, CalendarDays, Phone, Mail, MessageSquare, Utensils } from 'lucide-react'

// 1. Restaurant Card Component (Consistent with your design)
const RestaurantCard = ({ restaurant }) => (
  <motion.div
    className="w-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    whileHover={{ y: -5 }}
  >
    <div className="h-48 overflow-hidden">
      <motion.img 
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
    </div>
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold">{restaurant.name}</h3>
        {restaurant.isVerified && (
          <Star className="text-yellow-400 fill-yellow-400" />
        )}
      </div>
      <div className="flex items-center text-gray-600 mb-2">
        <MapPin className="mr-1 text-[#ff601c]" size={16} />
        <span>{restaurant.location}</span>
      </div>
      <div className="flex items-center text-gray-600 mb-4">
        <Users className="mr-1 text-[#ff601c]" size={16} />
        <span>{restaurant.followers} followers</span>
      </div>
      <motion.button
        className="w-full bg-[#ff601c] text-white py-2 rounded-lg flex items-center justify-center gap-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <CalendarDays size={16} />
        Book Table 
      </motion.button>
    </div>
  </motion.div>
)

// 2. Contact Form Component (Enhanced version)
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '+237',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic
  }

  const formatPhone = (value) => {
    if (!value.startsWith('+237')) return `+237${value.replace(/\D/g,'')}`
    return value
  }

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div>
        <label className="flex items-center gap-2 mb-1 text-gray-700">
          <User className="text-[#ff601c]" size={16} />
          Full Name
        </label>
        <input
          type="text"
          className="w-full p-3 border-2 border-[#ff601c] bg-orange-50 rounded-lg"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </div>

      <div>
        <label className="flex items-center gap-2 mb-1 text-gray-700">
          <Mail className="text-[#ff601c]" size={16} />
          Email
        </label>
        <input
          type="email"
          className="w-full p-3 border-2 border-[#ff601c] bg-orange-50 rounded-lg"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>

      <div>
        <label className="flex items-center gap-2 mb-1 text-gray-700">
          <Phone className="text-[#ff601c]" size={16} />
          Phone
        </label>
        <div className="flex items-center border-2 border-[#ff601c] bg-orange-50 rounded-lg overflow-hidden">
          <span className="px-3 py-3 bg-orange-100 text-[#ff601c] font-medium">+237</span>
          <input
            type="tel"
            className="flex-1 p-3 bg-transparent focus:outline-none"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: formatPhone(e.target.value)})}
            maxLength={13}
          />
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2 mb-1 text-gray-700">
          <MessageSquare className="text-[#ff601c]" size={16} />
          Message
        </label>
        <textarea
          className="w-full p-3 border-2 border-[#ff601c] bg-orange-50 rounded-lg h-32"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        ></textarea>
      </div>

      <motion.button
        type="submit"
        className="w-full bg-[#ff601c] text-white py-3 rounded-lg flex items-center justify-center gap-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Mail size={16} />
        Send Message
      </motion.button>
    </motion.form>
  )
}

// 3. Main Website Layout
const Website = () => {
  const restaurants = [
    {
      id: 1,
      name: "Gourmet Paradise",
      location: "Downtown, Yaoundé",
      followers: "1.2k",
      isVerified: true,
      image: "/restaurant1.jpg"
    },
    // Add more restaurants...
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <Utensils className="text-[#ff601c]" />
            <span className="text-xl font-bold">FoodFinder</span>
          </motion.div>
          <nav>
            <ul className="flex gap-6">
              <li><a href="#" className="hover:text-[#ff601c]">Home</a></li>
              <li><a href="#" className="hover:text-[#ff601c]">Restaurants</a></li>
              <li><a href="#" className="hover:text-[#ff601c]">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Discover the Best Restaurants
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            From gourmet cuisines to cozy cafés, find your next favorite dining spot
          </motion.p>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="py-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <ChefHat className="text-[#ff601c]" />
            <h2 className="text-2xl font-bold">Top Restaurants</h2>
          </div>
          <p className="text-gray-600">Book your table at the finest dining establishments</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="text-[#ff601c]" />
              <h2 className="text-2xl font-bold">Contact Us</h2>
            </div>
            <p className="text-gray-600">Have questions? Get in touch with our team</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-96"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.78374788991!2d11.518860614757915!3d3.866880197237671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf4a5c0e3c3f%3A0x5f5a5c0e3c3f5f5a!2sYaound%C3%A9%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Utensils className="text-[#ff601c]" />
                FoodFinder
              </h3>
              <p className="text-gray-400">Discover the best dining experiences in your city.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#ff601c]">Home</a></li>
                <li><a href="#" className="hover:text-[#ff601c]">Restaurants</a></li>
                <li><a href="#" className="hover:text-[#ff601c]">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <MapPin className="text-[#ff601c]" size={16} />
                  Yaoundé, Cameroon
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="text-[#ff601c]" size={16} />
                  +237 6XX XXX XXX
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="text-[#ff601c]" size={16} />
                  contact@foodfinder.cm
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} FoodFinder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Website