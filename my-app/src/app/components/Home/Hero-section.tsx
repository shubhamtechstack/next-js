import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="px-10">

        <section className="relative h-[80vh] bg-red-500 rounded-2xl w-full overflow-hidden">

      {/* Background Image */}
      <div></div>
      <img
        src="https://media.istockphoto.com/id/2212149738/photo/uae-united-arab-emirates-abu-dhabi-downtown-panorama-and-financial-center-skyline.jpg?s=612x612&w=0&k=20&c=fG5n8meBRlWEjZz590RIZWs35kpGDB77sN1wc4Ng4Us="
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover z-10"
      />

      {/* Gradient Overlay (Blue → Transparent) */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700/90 via-blue-600/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full">
        {/* Left Content */}
        <div className="flex w-1/2 flex-col justify-center px-12 text-white">
          <h1 className="text-5xl font-bold leading-tight">
            Build Fast & Modern <br /> Web Applications
          </h1>

          <p className="mt-4 text-lg text-blue-100">
            Learn React, Tailwind & modern web development with real-world
            projects and best practices.
          </p>

          <button className="mt-6 w-fit rounded-full bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100 transition">
            Get Started
          </button>
        </div>

        {/* Right Empty Space */}
        <div className="relative w-1/2">
          {/* Bottom Right Button */}
          <button className="absolute bottom-8 right-8 rounded-lg border border-white px-5 py-2 text-white hover:bg-white hover:text-blue-700 transition">
            Learn More →
          </button>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default HeroSection;
