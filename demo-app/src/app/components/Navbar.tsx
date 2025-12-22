'use client'

import Link from "next/link"

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto  py-2">

        {/* Top Row */}
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">
             <img className="h-[58px]" src="https://www.fortunaadvisors.com.au/wp-content/uploads/2015/06/cropped-cropped-logo-advisory-group-1-300x85.jpg" alt="" srcset="" />
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
            <Link href="#" className="hover:text-green-600">Business Advisory</Link>
            <Link href="#" className="hover:text-green-600">Tax</Link>
            <Link href="#" className="hover:text-green-600">Legal</Link>
            <Link href="#" className="hover:text-green-600">CFO & Accounting</Link>
            <Link href="#" className="hover:text-green-600">Financial Planning</Link>
            <Link href="#" className="hover:text-green-600">Business Insurance</Link>
                <Link href="#" className="hover:text-green-600">CFO & Accounting</Link>
            <Link href="#" className="hover:text-green-600">Resources</Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="hidden md:inline-block text-sm font-medium text-gray-700 hover:text-green-600"
            >
              Resources
            </Link>

        
          </div>
        </div>

      </div>
    </header>
  )
}
