import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .min(11, "Number must be at least 11 characters (e.g., 123-456-789)") // Adjusted for formatted input
    .max(11, "Number must be at most 12 characters (e.g., 123-456-7890)")
    .regex(/^\d{3}-\d{3}-\d{3}$/, "Invalid phone number format (e.g., 123-456-789)"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm({ resolver: zodResolver(contactSchema), mode: "onChange" });

  const [feedbackVisible, setFeedbackVisible] = useState(false);

  const onSubmitForm = async (data) => {
    // Simulate a 3-second delay for form submission
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Log the form data after the delay
    console.log("FormData", data);
    reset();

    // Show feedback message
    setFeedbackVisible(true);

    // Hide feedback message after 3 seconds
    setTimeout(() => {
      setFeedbackVisible(false);
    }, 3000);
  };

  const handleInputChange = (e) => {
    let input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    let formatted = input
      .slice(0, 9) // Limit to 10 digits
      .replace(/(\d{3})(\d{3})(\d{3})/, "$1-$2-$3"); // Format as 123-456-7890
    setValue("phoneNumber", formatted); // Update react-hook-form value
  };

  const phoneNumberValue = watch("phoneNumber"); // Watch for changes to phoneNumber

  return (
    <div className="container max-w-8xl mx-auto px-4">
      <div className="bg-white">
        {/* Contact Section */}
        <div className="container mx-auto py-10 px-1">
          <div className="text-center">
            <h5 className="text-primary text-lg font-semibold">Contact Us</h5>
            <h1 className="text-3xl font-bold">Contact For Any Query</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Map */}
            <div className="rounded-lg overflow-hidden">
              <iframe
                className="w-full h-[370px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit(onSubmitForm)}>
              <div className="flex space-x-2 mb-4">
                <div className="flex-1">
                  <input
                    {...register("name")}
                    type="text"
                    className="w-full p-3 border-[2px] border-[#ff601c] mb-1 focus:outline-none bg-orange-50 rounded-lg"
                    placeholder="Full Name"
                  />
                  {errors.name && (
                    <div className="text-red-500 text-sm font-medium px-4 py-2 bg-red-50 border border-red-200 rounded-lg">
                      {errors.name.message}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full p-3 border-[2px] border-[#ff601c] mb-1 focus:outline-none bg-orange-50 rounded-lg"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <div className="text-red-500 text-sm font-medium px-4 py-2 bg-red-50 border border-red-200 rounded-lg">
                      {errors.email.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <div className="flex space-x-2 items-center w-full p-3 border-[2px] border-[#ff601c] mb-1 bg-orange-50 rounded-lg">
                  <div>(+237)</div>
                  <input
                    {...register("phoneNumber")}
                    type="tel"
                    className="flex-1 bg-transparent focus:outline-none"
                    placeholder="Phone"
                    value={phoneNumberValue || ""}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.phoneNumber && (
                  <div className="text-red-500 text-sm font-medium px-4 py-2 bg-red-50 border border-red-200 rounded-lg">
                    {errors.phoneNumber.message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <textarea
                  {...register("message")}
                  className="w-full p-3 border-[2px] border-[#ff601c] mb-1 focus:outline-none bg-orange-50 rounded-lg h-40"
                  placeholder="Message"
                ></textarea>
                {errors.message && (
                  <div className="text-red-500 text-sm font-medium px-4 py-2 bg-red-50 border border-red-200 rounded-lg">
                    {errors.message.message}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className={`w-full font-semibold text-white py-3 ${
                  isValid ? "bg-[#ff601c]" : "bg-[#ff601caa]"
                } rounded-lg`}
                disabled={!isValid || isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Feedback Message */}
          {feedbackVisible && (
            <div className="mt-4 bg-green-50 text-center text-green-600 border border-green-200 rounded-md p-4 mt-2">
              Thank you for your message! We'll get back to you shortly.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;