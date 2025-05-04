import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";


const HeroSection = () => {
  return (
    <div
  className="relative bg-gradient-to-r from-[#007BFF] to-[#10B981] text-white pt-40 md:pt-46 pb-30 px-5"
  style={{
    backgroundImage: "url('/zahraitdevbg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Darker Overlay */}
  <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

  <div className="container mx-auto relative z-20 flex justify-center text-center md:text-left pt-16">
    <motion.div
      className="md:w-2/3 mt-5 md:mt-0 text-center"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-md">
        Welcome to{" "}
        <span className="text-[#FFD700] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          ZahraITDev
        </span>
      </h1>

      <motion.p
        className="text-base md:text-xl mt-3 text-gray-100 leading-relaxed drop-shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        A leading{" "}
        <span className="font-semibold text-[#00FFAB] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
          Software Company
        </span>{" "}
        specializing in
        <span className="font-semibold text-[#00FFAB] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
          {" "}
          Web Development
        </span>{" "}
        and
        <span className="font-semibold text-[#00FFAB] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
          {" "}
          Digital Marketing
        </span>
        . We build high-performance, responsive websites and deliver
        growth-focused digital strategies to elevate your brand.
      </motion.p>

      {/* CTA Buttons */}
      <div className="mt-6 flex justify-center space-x-4">
        <Link to="/contact">
          <motion.button
            className="px-6 py-3 bg-[#FFD700] font-medium text-gray-900 rounded shadow-md hover:bg-yellow-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Schedule a Consultation
          </motion.button>
        </Link>
        <Link to="/portfolio">
          <motion.button
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded shadow-md hover:bg-gray-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Explore Our Work
          </motion.button>
        </Link>
      </div>

      {/* Social Media Icons */}
      <div className="mt-6 flex justify-center space-x-5">
        <a
          href="https://www.facebook.com/profile.php?id=100064773381842"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook className="text-3xl hover:text-blue-500 transition-colors duration-300" />
        </a>
        <a
          href="https://www.instagram.com/jahed.miah98/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="text-3xl hover:text-pink-500 transition-colors duration-300" />
        </a>
        <a
          href="https://github.com/MdJahedMiah"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="text-3xl hover:text-green-500 transition-colors duration-300" />
        </a>
      </div>
    </motion.div>
  </div>
</div>

  );
};

export default HeroSection;
