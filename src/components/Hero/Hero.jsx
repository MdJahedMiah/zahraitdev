import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import profileImage from "../../assets/zahraitdev.jpg"; // Updated Image


const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#007BFF] to-[#10B981] text-white pt-36 md:pt-46 pb-30 px-5" style={{
      backgroundImage: "url('/zahraitdevbg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    }}>
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        {/* Image Section */}
        <motion.div
          className="md:w-1/3 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={profileImage}
            alt="Zahraitdev - Web Developer and Digital Marketer"
            className="w-52 h-52 md:w-64 md:h-64 rounded-full shadow-lg border-4 border-white"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="md:w-2/3 mt-5 md:mt-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold">
            Welcome to <span className="text-yellow-300">ZahraITDev</span>
          </h1>
          <motion.p
            className="text-base md:text-xl mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A leading{" "}
            <span className="font-semibold text-yellow-300">
              Software Company
            </span>{" "}
            specializing in
            <span className="font-semibold text-yellow-300">
              {" "}
              Web Development
            </span>{" "}
            and
            <span className="font-semibold text-yellow-300">
              {" "}
              Digital Marketing
            </span>
            . We build high-performance, responsive websites and deliver
            growth-focused digital strategies to elevate your brand.
          </motion.p>

          {/* CTA Buttons */}
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <Link to="/contact">
              <motion.button
                className="px-2 md:px-6 py-1 md:py-3 bg-[#10B981] text-black font-semibold rounded shadow-lg hover:bg-yellow-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Schedule a Consultation
              </motion.button>
            </Link>

            <Link to="/portfolio">
              <motion.button
                className="px-2 md:px-6 py-1 md:py-3 bg-white text-blue-600 font-semibold rounded shadow-lg hover:bg-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Explore Our Work
              </motion.button>
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="mt-6 flex justify-center md:justify-start space-x-5">
            {/* <a
              href="https://www.linkedin.com/in/md-jahed-miah-1601b3211/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-3xl hover:text-blue-600 transition-colors duration-300" />
            </a> */}

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
