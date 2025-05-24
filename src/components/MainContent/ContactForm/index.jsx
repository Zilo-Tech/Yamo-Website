import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { CalendarDays, Mail, MessageSquare, User, Utensils } from "lucide-react";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  datetime: z
    .string()
    .nonempty("Date & Time are required")
    .refine((val) => !isNaN(new Date(val).getTime()), "Invalid date"),
  guests: z.string().min(1, "Please select number of guests"),
  message: z.string().min(1, "Message is required"),
});

const inputVariants = {
  focus: {
    boxShadow: "0 0 0 2px rgba(72, 187, 120, 0.5)",
    borderColor: "#48bb78",
    transition: { duration: 0.2 }
  }
};

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    data.datetime = new Date(data.datetime);
    console.log("Transformed Data:", data);
  };

  return (
    <motion.form 
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg  p-6 max-w-2xl mx-auto"
    >
      <div className="header mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Utensils className="w-6 h-6 text-orange-500" />
          <h1 className="text-2xl font-bold text-gray-800">Book a table online</h1>
        </div>
        <p className="text-gray-600">Make your reservation in just a few clicks</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 mb-1 flex items-center gap-2">
            <User className="w-4 h-4 text-orange-500" />
            Your Name
          </label>
          <motion.input
            {...register("name")}
            type="text"
            placeholder="John Doe"
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none"
            whileFocus="focus"
            variants={inputVariants}
          />
          {errors.name && (
            <motion.p 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1"
            >
              {errors.name.message}
            </motion.p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 mb-1 flex items-center gap-2">
            <Mail className="w-4 h-4 text-orange-500" />
            Your Email
          </label>
          <motion.input
            {...register("email")}
            type="email"
            placeholder="john@example.com"
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none"
            whileFocus="focus"
            variants={inputVariants}
          />
          {errors.email && (
            <motion.p 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1"
            >
              {errors.email.message}
            </motion.p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 mb-1 flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-orange-500" />
            Date & Time
          </label>
          <motion.input
            {...register("datetime")}
            type="datetime-local"
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none"
            whileFocus="focus"
            variants={inputVariants}
          />
          {errors.datetime && (
            <motion.p 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1"
            >
              {errors.datetime.message}
            </motion.p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 mb-1 flex items-center gap-2">
            <User className="w-4 h-4 text-orange-500" />
            Number of Guests
          </label>
          <motion.select
            {...register("guests")}
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none"
            whileFocus="focus"
            variants={inputVariants}
          >
            <option value="" disabled>Select guests</option>
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
            ))}
          </motion.select>
          {errors.guests && (
            <motion.p 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1"
            >
              {errors.guests.message}
            </motion.p>
          )}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-1 flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-orange-500" />
          Special Requests
        </label>
        <motion.textarea
          {...register("message")}
          placeholder="Any special requirements?"
          rows={4}
          className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none"
          whileFocus="focus"
          variants={inputVariants}
        />
        {errors.message && (
          <motion.p 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm mt-1"
          >
            {errors.message.message}
          </motion.p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#ff601c] text-white font-semibold py-3 px-6 rounded-lg w-full flex items-center justify-center gap-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <CalendarDays className="w-5 h-5" />
        {isSubmitting ? "Processing..." : "Book Now"}
      </motion.button>
    </motion.form>
  );
}

export default ContactForm;