import Image from "next/image";

const OverviewPage = () => {
  return (
    <div className="relative h-[400px] w-full shadow-2xl">
      <Image 
        src={"/hero-admin.svg"}
        alt="hero admin"
        layout="fill"
        objectFit="cover"
        className="z-0 select-none"
      />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-white text-7xl font-bold select-none">SoftTrack</h1>
      </div>
    </div>
  );
};

export default OverviewPage;
