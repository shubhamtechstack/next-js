import { Phone } from "lucide-react";

const Navbar1 = () => {
  return (
    <nav className="h-10  bg-[#001521] text-white  text-[14px] w-full overflow-hidden ">
      <div className="h-full overflow-hidden flex items-center justify-between ">
        
        {/* LEFT SIDE */}
        <div className="flex items-center gap-2 px-5 font-medium">
          <Phone  size={18} />
          <span>+91 98765 43210</span>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center h-full gap-12">
          <a href="#" className="hover:text-blue-200">About Us</a>
          <a href="#" className="hover:text-blue-200">Locations</a>
          <a href="#" className="hover:text-blue-200">Industries</a>
          <a href="#" className="hover:text-blue-200">Your Life Journey</a>
          <a href="#" className="hover:text-blue-200">Blogs</a>
          <a href="#" className="hover:text-blue-200">Resources</a>
          <a href="#" className="hover:text-blue-200">Contact</a>

          {/* FULL HEIGHT BUTTON */}
          <div className="h-full flex items-center">
            <button className="h-full px-8 bg-[#8fe020] rounded-tl-2xl text-black ">
              Contact us 
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar1;
