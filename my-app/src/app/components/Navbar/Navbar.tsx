import { ChevronDown } from "lucide-react";
import Navbar1 from "./Navbar01";

const Navbar = () => {
  const navLinks = [
    "About Us",
    "Solutions",
    "Industries",
    "Services",
    "Resources",
    "Blogs",
    "Contact",
  ];

  return (
    <>
    <Navbar1/>
     <nav className="bg-white pt-1">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="text-2xl font-bold text-blue-700">
            <img  className="h-[60]" src="https://www.fortunaadvisors.com.au/wp-content/uploads/2015/06/cropped-cropped-logo-advisory-group-1-300x85.jpg" alt="" />
          </div>

          {/* NAV LINKS */}
          <div className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="flex items-center gap-1 text-gray-700 font-medium cursor-pointer hover:text-blue-700 transition"
              >
                <span>{link}</span>
                <ChevronDown size={16} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </nav>
    </>
   
  );
};

export default Navbar;
