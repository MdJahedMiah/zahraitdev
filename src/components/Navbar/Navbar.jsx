import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "Contact", to: "/contact" },
    // { name: "GetAQuote", to: "/getaquote" },
  ];
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-6 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="cursor-pointer flex items-center space-x-1">
          <div className="w-14">
            <img src={logo} alt="" />
          </div>
          <h1
            className="text-4xl font-extrabold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#10B981]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            ZAHRAITDEV
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/getaquote"
              className="bg-gradient-to-r from-blue-600 to-[#10B981] text-white px-5 py-2 rounded-xl text-base font-semibold hover:from-blue-700 hover:to-teal-600 transition-all shadow-md"
            >
              Get a Quote
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 font-medium hover:text-blue-600"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/getaquote"
              className="block text-white text-center bg-[#10B981] rounded-xl px-4 py-2 mt-2 hover:bg-blue-700"
            >
              Get a Quote
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
