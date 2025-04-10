import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="h-screen w-screen bg-moodsic-bg flex flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="font-kumbh text-[64px] font-normal mb-4">welcome to</h2>
        <div className="relative">
          <h1 className="font-kumbh text-[150px] font-normal leading-none">
            m
            <span className="relative">
              o
              <div className="absolute w-[80px] h-[40px] bg-black rounded-b-[40px] top-[15px] left-1/2 -translate-x-1/2"></div>
            </span>
            <span className="relative">
              o
              <div className="absolute w-[80px] h-[40px] bg-black rounded-b-[40px] top-[15px] left-1/2 -translate-x-1/2"></div>
            </span>
            dsic
          </h1>
          <svg
            className="absolute left-1/2 -translate-x-1/2 -bottom-4"
            width="200"
            height="40"
            viewBox="0 0 200 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 20C40 20 80 40 100 40C120 40 160 20 160 20"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      
      <Link 
        to="/login" 
        className="mt-16 bg-moodsic-blue text-white font-kumbh text-[48px] px-12 py-4 rounded-full hover:bg-opacity-90 transition-all"
      >
        get started
      </Link>
    </div>
  );
};

export default WelcomePage;
