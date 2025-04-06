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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 text-white">
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
  );
};

export default WindowScr;
