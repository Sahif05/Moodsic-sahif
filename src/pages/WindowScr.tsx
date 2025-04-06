import React from "react";
import EmotionDetector from "../components/EmotionDetector";

const WindowScr: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-moodsic-bg">
      <div className="w-64 bg-white p-6 border-r border-gray-200 shadow-lg">
        <h2 className="font-kumbh text-xl font-bold mb-4 text-gray-800">Up Next</h2>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 p-6">
        <EmotionDetector />
      </div>
    </div>
  );
};

export default WindowScr;