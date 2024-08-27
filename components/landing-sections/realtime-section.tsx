import { AnimatedListDemo } from "../animated-list-hero";

export const ReatltimeSection = () => {
  return (
    <section>
      <div className="mx-72 flex items-center h-160 bg-gradient-to-br from-roxo to-verde rounded-3xl">
        <div className="w-full h-160 grid grid-cols-2 p-6">
          <div>
            <AnimatedListDemo />
          </div>
          <div className="flex bg-white rounded-lg p-6">
            <div className="">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
