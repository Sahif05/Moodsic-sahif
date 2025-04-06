import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";

export default function Home() {
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

      {/* Name and Description */}
      <div className="text-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#7494EC] to-[#BA77F9] leading-[1.2] py-4">
          Aamogh Sawant
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mx-auto mt-4 md:mt-8">
          Bridging creativity and logic to build impactful solutions in{" "}
          <span className="text-[#7494EC] font-semibold">machine learning</span>,{" "}
          <span className="text-[#7494EC] font-semibold">data analytics</span>, and{" "}
          <span className="text-[#7494EC] font-semibold">software development</span>.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-8 mt-6 justify-center">
        <a
          href="projects"
          className="px-6 py-3 text-lg font-bold text-black bg-gradient-to-r from-[#7494EC] to-[#BA77F9] rounded-full shadow-lg hover:from-[#7494EC] hover:to-[#BA77F9] transform transition-transform hover:scale-110"
        >
          View My Projects
        </a>
        <a
          href="work"
          className="px-6 py-3 text-lg font-bold text-[#7494EC] border border-[#7494EC] rounded-full shadow-lg hover:bg-[#7494EC] hover:text-black transform transition-transform hover:scale-110"
        >
          View My Work
        </a>
      </div>

      {/* Social Links */}
      <div className="relative z-10 mt-16 flex justify-center gap-12 pb-16 animate-fadeIn">
        <a
          href="https://github.com/aamoghS"
          target="_blank"
          className="text-4xl text-gray-300 hover:text-[#7494EC] transform transition-transform hover:scale-110"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/aamogh-sawant-229482278/"
          target="_blank"
          className="text-4xl text-gray-300 hover:text-[#7494EC] transform transition-transform hover:scale-110"
        >
          <BsLinkedin />
        </a>
        <a
          href="mailto:aamoghsawantt@gmail.com"
          className="text-4xl text-gray-300 hover:text-[#7494EC] transform transition-transform hover:scale-110"
        >
          <BsEnvelope />
        </a>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-24 text-gray-500 text-center pb-12 animate-fadeIn">
        <p className="text-sm">
          © {new Date().getFullYear()} Aamogh Sawant. Built with passion and purpose.
        </p>
      </footer>

      {/* Background Blurs */}
      <div className="absolute inset-0 pointer-events-none animate-fadeIn">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-[#7494EC] to-[#BA77F9] opacity-20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-[#BA77F9] to-[#7494EC] opacity-20 rounded-full blur-2xl" />
      </div>
    </div>
  );
}
