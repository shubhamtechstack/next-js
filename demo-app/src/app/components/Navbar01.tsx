'use client'

import Link from "next/link"

export default function Navbar() {
  return (
    <header className="bg-[#0A1E3F] text-white no-wrap">
      <div className="max-w-7xl   h-14 flex items-center justify-between">

        {/* LEFT - PHONE */}
        <div className="text-sm font-medium">
          📞 +91 98765 43210
        </div>

        {/* RIGHT - NAV LINKS */}
        <nav className="flex items-center  gap-12 text-sm">

          <Link href="#" className="hover:text-green-400 transition">
            About Us
          </Link>

          <Link href="#" className="hover:text-green-400 transition">
            Locations
          </Link>

          <Link href="#" className="hover:text-green-400 transition">
            Industries
          </Link>

          <Link href="#" className="hover:text-green-400 transition">
            Your Life Journey
          </Link>

          <Link href="#" className="hover:text-green-400 transition">
            Blogs
          </Link>

          <Link href="#" className="hover:text-green-400 transition">
            Resources
          </Link>

          {/* CONTACT BUTTON */}
          <Link
            href="#"
            className="ml-4 bg-[#7CDB00] text-black px-8 py-3 rounded-3xl font-semibold hover:bg-[#6BC400] transition"
          >
            Contact Us
          </Link>

        </nav>
      </div>
    </header>
  )
}
