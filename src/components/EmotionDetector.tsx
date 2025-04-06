import React, { useRef, useEffect, useState } from 'react';

const EmotionDetector: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [emotion, setEmotion] = useState<string>('');
  const [isDetecting, setIsDetecting] = useState<boolean>(true);
  const streamRef = useRef<MediaStream | null>(null);
  const [confidence, setConfidence] = useState<number>(0);

  useEffect(() => {
    startDetection();
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const startDetection = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
      setIsDetecting(true);
      detectEmotion();
    } catch (err) {
      console.error('err');
    }
  };

  const detectEmotion = async () => {
    if (!isDetecting || !videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (!context) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL('image/jpeg');

    try {
      const response = await fetch('http://localhost:8000/detect-emotion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imageData }),
      });

      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setEmotion(data.results[0].emotion);
        setConfidence(data.results[0].confidence);
      }
    } catch (error) {
      console.error('err');
    }

    requestAnimationFrame(detectEmotion);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="relative">
        <div className="border-4 border-white rounded-lg overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            className="rounded-lg shadow-lg w-[600px] h-[400px] object-cover"
          />
          {emotion && (
            <div className="rounded-lgabsolute bottom-0 left-0 right-0 bg-black bg-opacity-80 p-2">
              <p className="text-white text-center text-xl font-semibold">
                Emotion: <span className="text-blue-400">{emotion}</span> ({Math.round(confidence * 100)}%)
              </p>
            </div>
          )}
        </div>
        <canvas
          ref={canvasRef}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

export default EmotionDetector; 