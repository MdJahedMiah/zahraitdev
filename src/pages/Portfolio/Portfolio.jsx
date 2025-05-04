import { motion } from "framer-motion";
import { FaLeaf, FaChartLine, FaGlobe, FaYoutube, FaGamepad, FaPagelines, FaReact, FaLaptopCode, FaInstagram, FaFacebook, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "TaskMate – AI Enhanced MERN Stack App",
    icon: <FaReact className="text-blue-500 text-5xl" />,
    description: "Developed a full-stack AI-powered marketplace using the MERN stack with features like chatbots, forums, and real-time consultations.",
    link: "https://master-project-client.onrender.com/",
    image: "https://i.ibb.co/hFrJZdvQ/taskmate.png" 
  },
  {
    title: "SEOAbdur – Portfolio Website",
    icon: <FaLaptopCode className="text-green-600 text-5xl" />,
    description: "Created a modern, responsive React-based personal portfolio to showcase digital marketing skills and services.",
    link: "https://seoabdur.com/",
    image: "https://i.ibb.co/s9xKd5HP/abdurp.png" 
  },
  {
    title: "Fruit Burst – Fresh Juice Landing Page",
    icon: <FaLeaf className="text-lime-600 text-5xl" />,
    description: "A visually vibrant landing page for a juice brand, highlighting freshness and natural ingredients using responsive design.",
    link: "https://mdjahedmiah.github.io/fruit-burst/",
    image: "https://i.ibb.co/hJPtR7q8/fruit.png"
  },
  {
    title: "Gamer Zone – Gaming Store UI",
    icon: <FaGamepad className="text-purple-500 text-5xl" />,
    description: "An engaging and stylish front-end gaming store UI showcasing featured games and categories for gamers.",
    link: "https://mdjahedmiah.github.io/Gamer-Zone/",
    image: "https://i.ibb.co/RrdbZsP/game.png"
  },
  {
    title: "Online Flower Shop – Floral Ecommerce",
    icon: <FaPagelines className="text-pink-400 text-5xl" />,
    description: "A soft, elegant landing page design for an online flower shop using HTML, TailwindCSS, and responsive layout techniques.",
    link: "https://mdjahedmiah.github.io/Online-Flower-Shop/",
    image: "https://i.ibb.co/gMXsfV8y/flower.png"
  },
  {
    title: "TechHub – Dynamic Tech Platform",
    icon: <FaGlobe className="text-gray-500 text-5xl" />,
    description: "TechHub is a dynamic online platform that serves as a vibrant hub for technology enthusiasts, innovators, and consumers alike. It is designed to be the go-to destination for discovering and sharing the latest and most exciting tech products.",
    link: "https://assignment-12-aa218.web.app/",
    image: "https://i.ibb.co/23BSvVkR/techhub.png" 
  },
  {
    title: "Haven Hotel – Unique Stays",
    icon: <FaGlobe className="text-gray-500 text-5xl" />,
    description: "Welcome to Haven Hotel, where every stay is unique. We offer personalized experiences for every guest, ensuring a memorable and comfortable visit.",
    link: "https://assignment-11-3eb50.web.app/",
    image: "https://i.ibb.co/Kxgq3zpv/haven.png" 
  },
  {
    title: "BrandShop – Explore What You Need",
    icon: <FaGlobe className="text-gray-500 text-5xl" />,
    description: "Explore what you need at BrandShop – the best way to buy the products you love. Offering a wide range of top-quality products with an easy shopping experience.",
    link: "https://assignment10-b3631.web.app/",
    image: "https://i.ibb.co/HTkrky69/brand.png" 
  },
  {
    title: "Summer Sale – E-commerce Web App",
    icon: <FaChartLine className="text-yellow-500 text-5xl" />,
    description: "An e-commerce app designed for summer sale promotions and discounts.",
    link: "https://mdjahedmiah.github.io/summerSale/",
    image: "https://i.ibb.co/YTRHT3R9/summer.png" 
  },
  {
    title: "phTube – YouTube Clone",
    icon: <FaYoutube className="text-red-500 text-5xl" />,
    description: "A YouTube clone app showcasing video streaming, liking, and commenting functionalities.",
    link: "https://mdjahedmiah.github.io/phTube/",
    image: "https://i.ibb.co/LhQPNHyb/ph.png" 
  },
  {
    title: "YouTube Video SEO Optimization",
    icon: <FaYoutube className="text-red-500 text-5xl" />,
    description: "Successfully optimized a YouTube video using advanced SEO techniques, achieving a perfect 100/100 vidIQ SEO score. Improved visibility, rankings, and engagement.",
    image: "https://i.ibb.co/6JLmJxRk/youtube-video-seo-optimization.jpg",
  },
  {
    title: "High-Performing Facebook Ad Campaign",
    icon: <FaFacebook className="text-blue-700 text-5xl" />,
    description: "Managed multiple Facebook ad campaigns, including engagement, promotion, and message campaigns. Optimized targeting, budget management, and high-performing ad strategies.",
    image: "https://i.ibb.co/1Gdd44bh/fscamp.jpg",
  },
  {
    title: "Lead Generation Projects",
    icon: <FaUserTie className="text-purple-600 text-5xl" />,
    description: "Successfully completed lead generation projects across various industries, including B2B & B2C leads, verified email lists, social media leads, and data enrichment.",
    image: "https://i.ibb.co/hRgQ9n03/l2.jpg",
  },
  {
    title: "YouTube Growth Project",
    icon: <FaYoutube className="text-red-500 text-5xl" />,
    description: "Increased YouTube channel subscribers and engagement using strategic content promotion and SEO.",
    link: "https://docs.google.com/spreadsheets/d/1JdAhNdg_Nl6wz844YO_9jL_ucoXx2YOEyz3tFmztxL0/edit?usp=sharing",
    image: "https://i.ibb.co/xSXhfztr/yre.jpg"
    
  },
  {
    title: "Facebook Page Growth",
    icon: <FaFacebook className="text-blue-600 text-5xl" />,
    description: "Boosted Facebook page followers and post reach through targeted strategies.",
    link: "https://docs.google.com/spreadsheets/d/1fK13t46GuRC0Yr5zNSx4uDnjIMIBTvAvX-6lVC0JzgE/edit?usp=sharing",
    image: "https://i.ibb.co/xV88cC8/fbr.jpg"
    
  },
  {
    title: "Instagram Account Growth",
    icon: <FaInstagram className="text-pink-500 text-5xl" />,
    description: "Successfully increased Instagram followers and engagement through niche-targeted content and promotion.",
    link:"https://docs.google.com/spreadsheets/d/1bv6SNTRIrWUPF-mXyjsYVBKrYiX0GnjKGR4h0cyQJ_g/edit?usp=sharing",
    image: "https://i.ibb.co/TDxTCdyW/instar.jpg"
    
  },

];

const Portfolio = () => {
  return (
    <div className="container mx-auto py-16 px-4 text-center mt-24">
      <motion.h2
        className="text-4xl font-bold mb-6 text-blue-700 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
       Our Work
      </motion.h2>
      <p className="text-gray-600 text-lg mb-12">
      Explore some of the impactful projects delivered by ZahraITDev — ranging from dynamic full-stack web applications to results-driven digital marketing campaigns. Each project showcases our commitment to performance, design, and measurable growth.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="hover:shadow-lg transition-shadow duration-300 bg-white p-6 rounded-2xl border border-gray-200"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link to={project.link || "#"}>
              <div className="flex flex-col items-center text-center">
                {project.icon}
                <h3 className="text-xl font-semibold mt-4 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <img
                  src={project.image}
                  alt={project.title}
                  className="mt-4 rounded-lg shadow-md w-full h-48 object-cover"
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
