import React, { useState } from "react";
import { Link } from "react-router-dom";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "ResumeTemplate",
      date: "December 2024",
      description:
        "Designed an elegant and modern resume template inspired by Jake’s approach, enhancing functionality and aesthetics for greater impact. Used LaTeX for precise control over layout, typography, and structure, creating a highly customizable and professional-looking resume. Integrated print-ready styles to ensure compatibility for both digital sharing and physical distribution, offering flexibility in showcasing professional details.",
      url: "https://github.com/aamoghS/ResumeFormat", // Replace with your actual project URL if available
    },
    {
      id: 2,
      title: "KnightHacks",
      date: "September 2024",
      description:
        "Developed a web application using JavaScript and Next.js to educate homeowners on power consumption across Florida counties, incorporating interactive features via a Pigeon Maps integration. Implemented a MongoDB backend to efficiently store and query county data, facilitating real-time updates through a custom API that responds to user interactions with the map markers.",
      url: "https://devpost.com/software/visuwatt", // Replace with your actual project URL if available
    },
    {
      id: 3,
      title: "ShellHacks 2024",
      date: "September 2024",
      description:
        "Developed an AR interface for daily-use features like reminders, weather updates, and music, using Snapchat Spectacles, JavaScript, and TypeScript. Collaborated with a team to quickly adapt to new technologies and optimize project workflow despite time constraints.",
      url: "https://devpost.com/software/spectacles-mainframe", // Replace with your actual project URL if available
    },
    {
      id: 4,
      title: "Olympic Medal Counter",
      date: "March 2024",
      description:
        "Programmed an application with Python and BeautifulSoup to extract medal counts from BBC’s website and generate a dictionary of countries with medal data. Created data visualizations using Matplotlib and Pandas to display and rank countries based on medal counts.",
      url: "https://github.com/aamoghS/olympicsScraping", // Replace with your actual project URL if available
    },
    {
      id: 5,
      title: "Music Analyzer",
      date: "June 2023",
      description:
        "Developed an application with Python and Spotify Web API to extract track features and generate optimal playlists based on user preferences. Built an algorithm to display song pairings based on metadata such as genre and song signatures to create rankings.",
      url: "https://github.com/aamoghS/SpotifyPython", // Replace with your actual project URL if available
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

      {/* Projects Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7494EC] to-[#BA77F9] leading-[1.2] py-6">
          Projects
        </h1>
        <p className="text-lg mt-2 text-gray-300">Explore my work and creations</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project) => (
          <a
          key={project.id}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1C4CCE] hover:bg-[#1C4CCE] rounded-lg shadow-lg p-6 flex flex-col hover:scale-105 transition-transform duration-200"
        >
          <span className="text-gray-300 text-sm">{project.date}</span>
          <h2 className="text-2xl font-bold mt-2 text-white">{project.title}</h2>
          <p className="mt-4 text-gray-200">{project.description}</p>
          <div className="mt-auto flex justify-between items-center text-sm text-gray-300">
            <span className="text-white hover:underline">Read more →</span>
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

export default Projects;
