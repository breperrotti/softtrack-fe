"use client"

const VideoPage = () => {
  return (
    <div className="inset-0 flex -mt-16 min-h-[89dvh] w-full flex-col items-center justify-center bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <iframe width="1280" height="660" src="https://www.youtube.com/embed/1TN4x9MU1eo?si=IV1l6puwtxDNBrL8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-2xl"></iframe>
    </div>
  );
};

export default VideoPage;
