import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const GetAQuote = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_6iluek7",   // Replace with your EmailJS Service ID
      "template_7f81erp",  // Replace with your EmailJS Template ID
        formRef.current,
        "xtgmvVmXex_tIOxVf"    // Replace with your EmailJS Public Key4
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! We'll get back to you soon.");
          setFormData({
            name: "",
            email: "",
            service: "",
            budget: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert("Oops! Something went wrong. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="container mx-auto py-16 px-4 text-center mt-24">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-xl">
      <motion.h2
        className="text-4xl font-bold text-blue-800 tracking-wide mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Get A Quote
      </motion.h2>
        <p className="text-gray-600 mb-8">
          Fill out the form below to tell us about your project. We'll review it and get back to you with a custom quote.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a Service</option>
              <option value="Web Design">Web Design</option>
              <option value="Web Application">Web Application</option>
              <option value="SEO/Digital Marketing">SEO/Digital Marketing</option>
              <option value="Other">Other</option>
            </select>

            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Estimated Budget</option>
              <option value="£100-£300">£100 - £300</option>
              <option value="£300-£700">£300 - £700</option>
              <option value="£700-£1500">£700 - £1500</option>
              <option value="£1500+">£1500+</option>
            </select>
          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            {loading ? "Sending..." : "Request Quote"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetAQuote;
