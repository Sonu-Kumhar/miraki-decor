import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const PreloaderApp = ({ children }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // List all images/videos to preload
  const assets = [
    "/ser1.jpg","/ser2.jpg","/ser3.jpg","/ser4.jpg",
    "/ser11.jpg","/ser12.jpg","/ser13.jpg","/ser14.jpg",
    "/ser21.jpg","/ser22.jpg","/ser23.jpg","/ser24.jpg",
    "/ser31.jpg","/ser32.jpg","/ser33.jpg","/ser34.jpg",
    "/ser41.jpg","/ser42.jpg","/ser43.jpg","/ser44.jpg",
    "/bg-home.png","/bg-all.png","/founder.jpg","/co-founder.jpg",
    "/video1.mp4","/video2.mp4","/video3.mp4"
  ];

  useEffect(() => {
    // Only show preloader on first visit
    if (sessionStorage.getItem("preloaderShown")) {
      setIsLoading(false);
      return;
    }

    let loaded = 0;
    const total = assets.length;

    const incrementProgress = () => {
      loaded += 1;
      setProgress(Math.round((loaded / total) * 100));
      if (loaded === total) {
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem("preloaderShown", "true");
        }, 500); // small delay for smooth fade
      }
    };

    // Preload images
    assets.forEach((asset) => {
      if (asset.endsWith(".mp4")) {
        const video = document.createElement("video");
        video.src = asset;
        video.onloadeddata = incrementProgress;
        video.onerror = incrementProgress;
      } else {
        const img = new Image();
        img.src = asset;
        img.onload = incrementProgress;
        img.onerror = incrementProgress;
      }
    });
  }, []);

  if (!isLoading) return <>{children}</>;

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999] transition-opacity duration-700">
      <img src={logo} alt="Miraki Decor Logo" className="w-60 mb-6 animate-pulse" />
      <div className="w-64 h-4 bg-gray-700 rounded overflow-hidden">
        <div
          className="h-4 bg-yellow-500 rounded transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-white mt-4 text-3xl">{progress}%</p>
    </div>
  );
};

export default PreloaderApp;
