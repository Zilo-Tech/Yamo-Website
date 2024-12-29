import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  datetime: z
    .string()
    .nonempty("Date & Time are required")
    .refine((val) => !isNaN(new Date(val).getTime()), "Invalid date"),
  message: z.string().min(1, "Message is required"),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    // Convert datetime to a Date object if necessary
    data.datetime = new Date(data.datetime);
    console.log("Transformed Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`bg-gray-800 p-2`}>
      <div className="max-w-md mx-auto">
        <div className="header mb-4">
          <div className={`text-orange-500 italic font-bold`}>Reservation</div>
          <h1 className={`font-bold text-2xl text-white`}>Book a table online</h1>
        </div>
        <div className={`flex items-center space-x-4 mb-4`}>
          <div>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Your Name"
              className="p-2 border focus:outline outline-orange-500 flex-1 rounded"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>
          <div>
            <input
              {...register("email", { required: "Email required" })}
              type="email"
              placeholder="Your Email"
              className="p-2 border focus:outline outline-orange-500 flex-1 rounded"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
        </div>
        <div className={`flex items-center space-x-4 mb-4`}>
          <div>
            <input
              {...register("datetime", { required: "Date & Time are required" })}
              type="datetime-local"
              className="p-2 border focus:outline outline-orange-500 flex-1 rounded"
            />
            {errors.datetime && <p className="text-red-500">{errors.datetime.message}</p>}
          </div>
          <div>
            <select
             
              defaultValue=""
              name="nofpeople"
              className="p-2 border focus:outline outline-orange-500 flex-1 rounded"
            >
              <option value="" disabled>
                Number of people
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            {errors.nOfPeople && <p className="text-red-500">{errors.nOfPeople.message}</p>}
          </div>
        </div>
        <div className="mb-4 flex">
          <div>
            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Your Message"
              className="p-2 border focus:outline outline-orange-500 w-full rounded"
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message.message}</p>}
          </div>
        </div>
        <button type="submit" className="bg-green-500 p-2 text-white font-semibold rounded w-full">
          Book Now
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
