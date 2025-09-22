import React, { useEffect } from "react";

const SplashVideo = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // trigger when video ends
    }, 7000); // 7 seconds (or video duration)
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
      <video
        src="/Miraki-video.mp4" // reference from public folder
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default SplashVideo;
