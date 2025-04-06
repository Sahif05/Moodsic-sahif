import React from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/next"); // Navigate to the next page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-gradient-to-r from-blue-400 to-teal-500">
      <h1 className="text-4xl font-extrabold text-white mb-6">Welcome to Moodsic!</h1>
      <p className="text-lg text-white mb-8">
        Moodsic is a platform designed to combine your mood and music, offering
        personalized playlists based on your emotional state. It’s your perfect
        companion for every feeling.
      </p>
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-400 transition duration-300"
      >
        Go to Next Page
      </button>
    </div>
  );
};

export default Login;
