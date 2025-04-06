import React from "react";

const WelcomePage: React.FC = () => {
  const handleClick = () => {
    window.location.href = "http://localhost:8000/login";
    // Replace localhost:8000 with your actual FastAPI server address if different
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600">
      <h1 className="text-5xl font-extrabold text-white mb-6 tracking-wide text-center">
        Welcome to Moodsic
      </h1>
      <p className="text-xl text-white mb-8 max-w-lg text-center leading-relaxed opacity-90">
        Moodsic is an intuitive platform that tailors music to your mood. By
        analyzing your emotional state, we create personalized playlists to match
        your vibes, whether you're feeling upbeat or introspective. Let us be the
        soundtrack to your day.
      </p>
      <button
        onClick={handleClick}
        className="px-10 py-5 bg-green-600 text-white font-medium rounded-full shadow-xl hover:bg-green-500 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label="Proceed to the next page"
      >
        Get Started
      </button>
    </div>
  );
};

export default WelcomePage;
