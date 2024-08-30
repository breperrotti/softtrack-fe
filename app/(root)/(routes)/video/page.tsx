"use client";

const VideoPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-full relative -mt-20">
      <iframe
        src="https://www.youtube.com/embed/1TN4x9MU1eo?si=IV1l6puwtxDNBrL8"
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; gyroscope"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute rounded-2xl aspect-video w-80 md:w-144 lg:w-256"
      ></iframe>
    </div>
  );
};

export default VideoPage;
