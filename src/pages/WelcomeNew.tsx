import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeNew = () => {
  return (
    <div className="h-screen w-screen bg-moodsic-bg flex flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="font-kumbh text-[32px] font-normal -mb-4 [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)]">welcome to</h2>
        <div className="relative">
          <h1 className="font-kumbh text-[75px] font-normal leading-none [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)]">
            m
            <span className="relative">
              o
              <div className="absolute w-[27px] h-[28px] bg-black rounded-[40px] top-[55px] left-1/2 -translate-x-1/2" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}></div>
            </span>
            <span className="relative">
              o
              <div className="absolute w-[27px] h-[28px] bg-black rounded-[40px] top-[55px] left-1/2 -translate-x-1/2" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}></div>
            </span>
            dsic
          </h1>
          <svg
            className="absolute left-1/2 -translate-x-[60%] -bottom-4"
            width="120"
            height="40"
            viewBox="0 0 120 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 20C10 20 30 35 60 35C90 35 110 20 110 20"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
     
      <a
        href="http://localhost:8000/login"
        className="mt-10 bg-moodsic-blue text-white font-kumbh text-[20px] px-[20px] py-[20px] rounded-full hover:bg-opacity-90 transition-all w-[165px] h-[42px] flex items-center justify-center shadow-lg hover:shadow-xl"
      >
        get started
      </a>
    </div>
  );
};

export default WelcomeNew;