import React, { useState } from "react";
import { Link } from "react-router-dom";

const Work: React.FC = () => {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: "Vice President",
      company: "Black and Gold Analytics",
      location: "Orlando, FL",
      date: "August 2024 - Present",
      description:
        "Organized 5+ workshops on data analytics and web development, directly training 100+ participants in hands-on projects. Introduced a point system that increased member retention by 50%, motivating active participation through rewards for contributions.",
      url: "https://knightconnect.campuslabs.com/engage/organization/na--coming-soon", // Replace with your actual URL if available
    },
    {
      id: 2,
      title: "SEC Robot Team Member",
      company: "Institute of Electrical and Electronics Engineers (IEEE)",
      location: "Orlando, FL",
      date: "August 2024 - Present",
      description:
        "Collaborated with the SEC robot team to develop and implement vSLAM algorithms for the robot’s navigation and mapping tasks.",
      url: "https://www.ieee.org", // Replace with your actual URL if available
    },
    {
      id: 3,
      title: "Member",
      company: "Association for Computing Machinery (ACM)",
      location: "Orlando, FL",
      date: "August 2024 - Present",
      description:
        "Contributed to the development of a JavaScript-based Android application, OnLife, focusing on innovative features and user experience design. Assisted in organizing and facilitating coding workshops, providing hands-on support to participants and promoting technical skill development.",
      url: "https://www.acm.org", // Replace with your actual URL if available
    },
    {
      id: 4,
      title: "Center Assistant",
      company: "Kumon",
      location: "Jacksonville, FL",
      date: "August 2020 - May 2024",
      description:
        "Monitored students’ progress by inputting scores from Kumon homework into the CMS system, which assigned further work based on achieved scores. Tutored over 20 students in advanced math and grammar, leading to a 30% improvement in test scores over 6 months.",
      url: "https://www.kumon.com", // Replace with your actual URL if available
    },
    {
      id: 5,
      title: "Data Science and Machine Learning Intern",
      company: "NLP Logix",
      location: "Jacksonville, FL",
      date: "June 2023 - August 2023",
      description:
        "Produced data visualizations by analyzing NFL Play-by-Play dataset (2001–2021). Used Tableau to identify trends within data and establish relationships through interactive dashboards. Developed a machine learning algorithm in Python using Random Forest Classifier learning models to create a predictive model for play type based on analytic parameters.",
      url: "https://www.nlp-logix.com", // Replace with your actual URL if available
    },
  ]);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 space-y-16 pt-20 md:pt-28 animate-fadeIn">
      {/* Navbar */}
      <div className="absolute top-4 flex justify-center w-full space-x-6">
        <Link
          to="/"
          className="text-2xl font-semibold transform transition-transform hover:scale-110 text-transparent bg-clip-text bg-gradient-to-r from-[#7494EC] to-[#BA77F9] hover:from-[#7494EC] hover:to-[#BA77F9]"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-2xl font-semibold transform transition-transform hover:scale-110 text-transparent bg-clip-text bg-gradient-to-r from-[#7494EC] to-[#BA77F9] hover:from-[#7494EC] hover:to-[#BA77F9]"
        >
          About
        </Link>
        <Link
          to="/work"
          className="text-2xl font-semibold transform transition-transform hover:scale-110 text-transparent bg-clip-text bg-gradient-to-r from-[#7494EC] to-[#BA77F9] hover:from-[#7494EC] hover:to-[#BA77F9]"
        >
          Work
        </Link>
        <Link
          to="/projects"
          className="text-2xl font-semibold transform transition-transform hover:scale-110 text-transparent bg-clip-text bg-gradient-to-r from-[#7494EC] to-[#BA77F9] hover:from-[#7494EC] hover:to-[#BA77F9]"
        >
          Projects
        </Link>
      </div>

      {/* Work Experience Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7494EC] to-[#BA77F9] leading-[1.2] py-6">
          Work Experience
        </h1>
        <p className="text-lg mt-2 text-gray-300">Browse through the work and experiences I've gained.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {experiences.map((experience) => (
          <a
            key={experience.id}
            href={experience.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1C4CCE] hover:bg-[#1C4CCE] rounded-lg shadow-lg p-6 flex flex-col hover:scale-105 transition-transform duration-200"
          >
            <span className="text-gray-300 text-sm">{experience.date}</span>
            <h2 className="text-2xl font-bold mt-2 text-white">{experience.title}</h2>
            <h3 className="text-lg font-semibold mt-1 text-gray-300">{experience.company} - {experience.location}</h3>
            <p className="mt-4 text-gray-200">{experience.description}</p>
            <div className="mt-auto flex justify-between items-center text-sm text-gray-300">
              <span className="text-white hover:underline">Learn more →</span>
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-24 text-gray-500 text-center pb-12 animate-fadeIn">
        <p className="text-sm">
          © {new Date().getFullYear()} Aamogh Sawant. Built with passion and purpose.
        </p>
      </footer>
    </div>
  );
};

export default Work;
