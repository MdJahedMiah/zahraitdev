const AboutTeam = () => {
    const teamMembers = [
      {
        name: "Md Jahed Miah",
        role: "Frontend Developer & Founder",
        type: "frontend",
        description: "I specialize in building modern, responsive user interfaces using React.js and Tailwind CSS. I lead ZahraITDev with a vision to deliver clean, scalable, and SEO-friendly websites.",
        expertise: ["React.js", "Tailwind CSS", "JavaScript", "HTML/CSS", "UI/UX Design"],
        image: "https://i.ibb.co/NN3pKTD/jahedpp-removebg-preview.png",
        website: "https://jahed-portfolio.onrender.com/",
        cv: "jahedcv.docx",
      },
      {
        name: "Rezaul Karim",
        role: "Backend Developer",
        type: "backend",
        description: "Focused on scalable backend systems using Node.js and Express. Handles API architecture, database design, and server deployment at ZahraITDev.",
        expertise: ["Node.js", "Express.js", "MongoDB", "REST API", "Authentication", "Java", "javascript"],
        image: "/images/samiul.jpg",
        website: "https://samiul.dev",
        cv: "/docs/samiul-cv.pdf",
      },
      {
        name: "Abdur Rahman",
        role: "Digital Marketing Specialist",
        type: "marketing",
        description: "I help businesses grow online by implementing effective SEO strategies, content marketing, and analytics-driven digital campaigns. Proudly driving digital strategy at ZahraITDev.",
        expertise: ["SEO", "Content Strategy", "Google Analytics", "Social Media Marketing", "Technical SEO"],
        image: "https://i.ibb.co/G4b7NypV/abdur.jpg", // Make sure to add this image to your public/images folder
        website: "https://seoabdur.com/",
        cv: "abdurcv.pdf", // Replace with actual CV path if available
      }
    ];
  
    const roleColors = {
      frontend: "bg-purple-100 border-purple-300",
      backend: "bg-blue-100 border-blue-300",
      marketing: "bg-yellow-100 border-yellow-300",
    };
  
    const badgeColors = {
      frontend: "bg-purple-500",
      backend: "bg-blue-500",
      marketing: "bg-yellow-500",
    };
  
    return (
      <section className="py-20 px-6 bg-gray-50 text-gray-800" id="about-team">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600">
            Our dedicated professionals bring creativity, code, and strategy together to help your business grow.
          </p>
        </div>
  
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow transition border-t-4 ${
                roleColors[member.type]
              }`}
            >
              <div className="flex justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-3"
                />
              </div>
              <div
                className={`text-xs text-white px-3 py-1 rounded-full inline-block mb-3 font-semibold ${
                  badgeColors[member.type]
                }`}
              >
                {member.role}
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-700 mt-2">{member.description}</p>
  
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-indigo-700">Expertise:</h4>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {member.expertise.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
  
              <div className="mt-4 flex justify-between text-sm">
                <a
                  href={member.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  📄 CV
                </a>
                <a
                  href={member.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  🌐 Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  export default AboutTeam;