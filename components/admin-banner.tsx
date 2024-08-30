import Image from "next/image";

interface AdminBannerProps {
  title: string;
}

export const AdminBanner = ({ title }: AdminBannerProps) => {
  return (
    <div className="relative h-[200px] sm:h-[300px] w-full shadow-md">
      <Image
        src="/hero-admin.svg"
        alt="hero admin"
        layout="fill"
        objectFit="cover"
        className="z-0 select-none"
      />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-bold select-none">
          {title}
        </h1>
      </div>
    </div>
  );
};
