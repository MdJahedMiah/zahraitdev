import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  { 
    name: "Imranuzzaman Imran",
    address: "Romford, London, United Kingdom", 
    feedback: "Incredible web development service! My site is now super responsive and looks amazing on all devices.",
    image: "https://i.ibb.co/3Xrkw6B/imran.jpg"
  },
  { 
    name: "John Doe", 
    feedback: "Built a fast, modern website that exceeded my expectations. The design and performance are top-notch!",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  { 
    name: "Michael Lee", 
    feedback: "Highly skilled! Built my site with React.js and everything runs smoothly and fast.",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  }
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="p-12 bg-gradient-to-r from-blue-100 to-blue-100">
      <h2 className="text-4xl font-extrabold text-center text-indigo-700 tracking-wide py-8">
        What My Clients Say
      </h2>

      <div className="relative w-full max-w-xl mx-auto overflow-hidden bg-gradient-to-r from-purple-50 to-indigo-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-lg shadow-lg bg-white flex flex-col items-center text-center"
          >
            <img 
              src={testimonials[index].image} 
              alt={testimonials[index].name} 
              className="w-20 h-20 rounded-full shadow-md border-4 border-purple-300"
            />
            <h3 className="text-xl font-semibold mt-4 text-indigo-700">{testimonials[index].name}</h3>
            {testimonials[index].address && (
              <p className="text-md font-medium mt-2 text-indigo-500">{testimonials[index].address}</p>
            )}
            <p className="text-gray-600 leading-relaxed mt-2 italic font-light">
              {testimonials[index].feedback}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4">
          <button onClick={prevSlide} className="p-2 rounded-full shadow hover:bg-indigo-400">
            ◀
          </button>
          <button onClick={nextSlide} className="p-2 rounded-full shadow hover:bg-indigo-400">
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
