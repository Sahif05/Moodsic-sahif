"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaJava,
  FaReact,
  FaRProject,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiPython,
  SiAstro,
  SiExpress,
  SiTensorflow,
  SiTailwindcss,
  SiBootstrap,
  SiPandas,
  SiKeras,
  SiRedis,
  SiFlask,
  SiDjango,
  SiOpencv,
  SiGit,
  SiPrisma,
  SiJupyter,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiVercel,
  SiVitest,
  SiSupabase,
  SiAmazons3,
  SiScikitlearn,
  SiTrpc,
  SiGo,
  SiPytorch,
  SiDocker,
  SiJira,
} from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";

const Icons: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="mb-8 animate-fadeIn">
    <h3 className="text-lg font-bold text-[#BA77F9] mb-4">{title}</h3>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-center">
      {children}
    </div>
  </div>
);

const About: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative z-10 min-h-screen bg-black text-white px-4 md:px-8 space-y-16 pt-28 animate-fadeIn">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-30 bg-black bg-opacity-80 py-4 animate-fadeIn">
        <div className="flex justify-center space-x-6">
          <Link
            to="/"
            aria-label="Go to home page"
            className="text-2xl font-semibold transform transition-transform hover:scale-110 text-transparent bg-clip-text bg-gradient-to-r from-[#7494EC] to-[#BA77F9] hover:from-[#7494EC] hover:to-[#BA77F9] animate-fadeIn"
          >
            Home
          </Link>
          <Link
            to="/about"
            aria-label="Go to about page"
            className="text-2xl font-semibold transform transition-transform hover:scale-110 text-transparent bg-clip-text bg-gradient-to-r from-[#7494EC] to-[#BA77F9] hover:from-[#7494EC] hover:to-[#BA77F9] animate-fadeIn"
          >
            About
          </Link>
          <Link
            to="/work"
            aria-label="Go to work page"
            className="text-2xl font-semibold transform transition-transform hover:scale-110 text-transparent bg-clip-text bg-gradient-to-r from-[#7494EC] to-[#BA77F9] hover:from-[#7494EC] hover:to-[#BA77F9] animate-fadeIn"
          >
            Work
          </Link>
          <Link
            to="/projects"
            aria-label="Go to projects page"
            className="text-2xl font-semibold transform transition-transform hover:scale-110 text-transparent bg-clip-text bg-gradient-to-r from-[#7494EC] to-[#BA77F9] hover:from-[#7494EC] hover:to-[#BA77F9] animate-fadeIn"
          >
            Projects
          </Link>
        </div>
      </div>

      {/* Header Section */}
      <section
        id="about"
        className={`mt-12 max-w-4xl w-full mx-auto transition-opacity ${
          fadeIn ? "opacity-100" : "opacity-0"
        } duration-700 ease-out animate-fadeIn`}
      >
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7494EC] to-[#BA77F9] mb-8">
          About
        </h2>
        <div className="text-left space-y-6 md:space-y-8 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl animate-fadeIn">
            Hello, I am Aamogh Sawant. I am a passionate technology enthusiast who
            weaves together art with science in an attempt to solve complex problems
            creatively. I have experience working with data analytics, software
            development, and machine learning. My professional ventures have been
            driven by the desire to turn raw data into meaningful insights, create
            new software solutions, and be part of pioneering projects that leave a
            positive impact on the world.
          </p>
          <p className="text-lg md:text-xl animate-fadeIn">
            I am currently majoring in Computer Science at the University of Central
            Florida, and I will be graduating in May 2027. Some of the relevant
            courses I took are IB Computer Science, Introduction to C, Discrete
            Mathematics, and Multivariable Calculus. I have also certified in Java
            and Python from Microsoft and hold a CompTIA IT Certification.
          </p>
          <p className="text-lg md:text-xl animate-fadeIn">
            Other than this academic engagement, I am also serving as Workshop
            Director and Competition Coordinator at Black and Gold Analytics, where
            I have organized more than 5 workshops in data analytics and web
            development, directly training over 100 participants in hands-on
            projects. I have also coordinated 3+ competitions with 50+ participants
            each, resulting in innovative analytics projects and fostering
            strengthened teamwork.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`mt-12 max-w-4xl w-full mx-auto transition-opacity ${
          fadeIn ? "opacity-100" : "opacity-0"
        } duration-700 ease-out animate-fadeIn`}
      >
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7494EC] to-[#BA77F9] mb-8">
          Skills & Technologies
        </h2>
        <div className="flex flex-col md:flex-row gap-16 animate-fadeIn">
          {/* Left Column */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <Icons title="Languages">
              <FaJava size={36} title="Java" className="text-current transform transition-transform hover:scale-110 animate-fadeIn" />
              <SiC size={36} title="C" className="text-current transform transition-transform hover:scale-110 animate-fadeIn" />
              <SiPython size={36} title="Python" className="text-current transform transition-transform hover:scale-110 animate-fadeIn" />
              <FaRProject size={36} title="R" className="text-current transform transition-transform hover:scale-110 animate-fadeIn" />
              <SiTypescript size={36} title="TypeScript" className="text-current transform transition-transform hover:scale-110 animate-fadeIn" />
              <SiJavascript size={36} title="JavaScript" className="text-current transform transition-transform hover:scale-110 animate-fadeIn" />
              <SiHtml5 size={36} title="HTML" className="text-current transform transition-transform hover:scale-110 animate-fadeIn" />
              <SiCss3 size={36} title="CSS" className="text-current transform transition-transform hover:scale-110 animate-fadeIn" />
            </Icons>
            <Icons title="Packages">
              <SiScikitlearn size={36} title="scikit-learn" className="text-current transform transition-transform hover:scale-110 animate-fadeIn" />
              <SiNumpy size={36} title="NumPy" className="text-current transform transition-transform hover:scale-110 animate-fadeIn" />
              <SiOpencv size={36} title="OpenCV" className="text-current transform transition-transform hover:scale-110 animate-fadeIn" />
              <SiPandas size={36} title="Pandas" className="text-current transform transition-transform hover:scale-110 animate-fadeIn" />
              <SiPytorch size={36} title="PyTorch" className="text-current transform transition-transform hover:scale-110 animate-fadeIn" />
              <SiTensorflow size={36} title="TensorFlow" className="text-current transform transition-transform hover:scale-110 animate-fadeIn" />
              <SiKeras size={36} title="Keras" className="text-current transform transition-transform hover:scale-110 animate-fadeIn" />
            </Icons>
          </div>
          {/* Right Column */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <Icons title="Frameworks">
              <FaReact size={36} title="React" className="text-current transform transition-transform hover:scale-110 animate-fadeIn" />
              <SiNextdotjs size={36} title="Next.js" className="text-current transform transition-transform hover:scale-110 animate-fadeIn" />
              <SiExpress size={36} title="Express.js" className="text-current transform transition-transform hover:scale-110 animate-fadeIn" />
              <SiTailwindcss size={36} title="Tailwind CSS" className="text-current transform transition-transform hover:scale-110 animate-fadeIn" />
            </Icons>
            <Icons title="Databases">
              <SiMongodb size={36} title="MongoDB" className="text-current transform transition-transform hover:scale-110 animate-fadeIn" />
              <GrMysql size={36} title="MySQL" className="text-current transform transition-transform hover:scale-110 animate-fadeIn" />
            </Icons>
            <Icons title="Tools & Platforms">
              <SiGit size={36} title="Git" className="text-current transform transition-transform hover:scale-110 animate-fadeIn" />
              <BsGithub size={36} title="GitHub" className="text-current transform transition-transform hover:scale-110 animate-fadeIn" />
              <SiVercel size={36} title="Vercel" className="text-current transform transition-transform hover:scale-110 animate-fadeIn" />
              <SiFigma size={36} title="Figma" className="text-current transform transition-transform hover:scale-110 animate-fadeIn" />
            </Icons>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
