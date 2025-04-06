import React, { useEffect, useRef } from "react";

const WindowScr: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    };

    startCamera();
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-6 border-r border-gray-700">
        <h2 className="text-xl font-bold mb-4">🔌 Connected</h2>
        <ul className="space-y-2">
          <li className="p-3 bg-gray-700 rounded-lg shadow hover:bg-gray-600 transition">
            📷 Camera Connected
          </li>
          {/* Add more device items here if needed */}
        </ul>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center flex-1 p-6">
        <div className="w-full max-w-4xl rounded-xl shadow-2xl bg-gray-700 p-6 border border-gray-600">
          <h1 className="text-3xl font-semibold mb-4 text-center">
            📷 Camera Live Preview
          </h1>
          <div className="flex justify-center">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="rounded-lg border-4 border-white w-full max-w-3xl aspect-video"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowScr;
