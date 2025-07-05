import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold mb-3">Follow Me</h2>
        <div className="flex justify-center space-x-4 text-lg ">
            <a
              href="https://www.linkedin.com/in/zahrait-dev-840667369/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Md Jahed Miah LinkedIn Profile"
            >
              <FaLinkedin className="text-3xl hover:text-blue-600 transition-colors duration-300" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100064773381842"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Md Jahed Miah Facebook Profile"
            >
              <FaFacebook className="text-3xl hover:text-blue-500 transition-colors duration-300" />
            </a>

            <a
              href="https://www.instagram.com/zahrait.dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Md Jahed Miah Instagram Profile"
            >
              <FaInstagram className="text-3xl hover:text-pink-500 transition-colors duration-300" />
            </a>
        </div>
        <p className="mt-4 text-sm opacity-75 pb-6">&copy; {new Date().getFullYear()} ZahraITDev. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;