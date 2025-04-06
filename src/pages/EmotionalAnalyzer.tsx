import React, { useEffect, useRef, useState } from "react";

const EmotionAnalyzer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cameraActive, setCameraActive] = useState(false);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setCameraActive(true);
        }
      } catch (err) {
        console.error("Camera access denied:", err);
      }
    };

    startCamera();
  }, []);

  return (
    <div className="flex min-h-screen font-sans">
      <aside className="w-64 bg-gray-800 text-white p-6 space-y-4 shadow-lg">
        <h2 className="text-2xl font-bold">Queue</h2>
        <ul className="space-y-2">
          <li className="hover:text-gray-300">Item 1</li>
          <li className="hover:text-gray-300">Item 2</li>
          <li className="hover:text-gray-300">Item 3</li>
        </ul>
      </aside>

      <main className="flex-1 flex flex-col">
        <nav className="flex justify-between items-center bg-gray-100 px-6 py-4 shadow-md">
          <div className="text-lg font-semibold cursor-pointer hover:text-blue-600">Home</div>
          <div className="text-lg font-semibold cursor-pointer hover:text-red-600">Logout</div>
        </nav>

        <section className="flex flex-grow p-6 gap-6 bg-gray-50">
          <div className="w-1/4 space-y-4">
            <h3 className="text-xl font-bold">Up Next</h3>
            <div className="space-y-2 text-gray-700">
              <p>Task 1</p>
              <p>Task 2</p>
              <p>Task 3</p>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-xl font-bold">Progress (14/17)</h3>
              <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden mt-2">
                <div className="h-4 bg-blue-500" style={{ width: "82%" }}></div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Metrics</h3>
              <p className="text-gray-600">Chart or Data Here</p>
            </div>

            <div className="flex justify-center items-center">
              {cameraActive ? (
                <video ref={videoRef} className="rounded-full w-64 h-64 object-cover border-4 border-blue-500 shadow-xl" />
              ) : (
                <p className="text-gray-500">Loading camera...</p>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EmotionAnalyzer;
