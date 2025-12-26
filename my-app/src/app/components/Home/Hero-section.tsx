import React from "react";
import { libreCaslon } from "../../layout";

const HeroSection: React.FC = () => {
  return (
    <div className="px-10 mt-4">
      <section className="relative h-[80vh] rounded-2xl w-full overflow-hidden">

        {/* Background Image */}
        <img
          src="https://media.istockphoto.com/id/2212149738/photo/uae-united-arab-emirates-abu-dhabi-downtown-panorama-and-financial-center-skyline.jpg?s=612x612&w=0&k=20&c=fG5n8meBRlWEjZz590RIZWs35kpGDB77sN1wc4Ng4Us="
          alt="Hero"
          className="absolute inset-0 h-full w-full object-cover z-0"
        />

        /* gradient */
        <div className="absolute inset-0 bg-gradient-to-r from-[#001511] via-[#001521]/90 to-transparent z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex h-full w-full">

          {/* Left Content */}
          <div className="flex w-[60%] gap-2 flex-col justify-center px-12 text-white">
            <h1 className={`${libreCaslon.className} text-6xl  leading-tight`}>
              Invested in You,
              <br></br>
              For Life
            </h1>

            <p className=" text-m text-[#DEF2FF]">
              Whether financial advice puts you in charge of life’s big moments. you’re planning to build a home, expand your business, or prepare for retirement, our personalised 
            </p><br></br>
      <p className="text-m text-[#DEF2FF]">
              Whether financial advice puts you in charge of life’s big moments. 
            </p>


            <div className="">
              <button className="mt-6 relative  overflow-hidden flex gap-2 items-center justify-between  rounded-full bg-transparent border border-[#8fe020] w-fit font-semibold  transition pl-8 pr-50 py-3">
                By ambitious

<button className=" w-fit absolute right-0 rounded-full bg-[#8fe020] px-12 py-3 font-semibold text-black hover:bg-blue-100 transition">
               Start here
              </button>

              </button>
              
            </div>

          </div>

          {/* Right Side */}
          <div className="relative w-1/2">
            <button className="absolute bottom-14 right-8 rounded-lg bg px-5 py-2 text-white bg-gray-600/50 ">
            Pause ||
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default HeroSection;
