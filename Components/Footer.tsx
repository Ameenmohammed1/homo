import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side */}
        <p className="text-sm text-gray-500">
          © 2025 <span className="text-white font-semibold">Homo</span>. All Rights Reserved.
        </p>
        
        {/* Right Side Links */}
        <ul className="flex flex-wrap gap-6 text-sm">
          <li className="hover:text-[#913ffd] transition-colors cursor-pointer">
            Privacy Policy
          </li>
          <li className="hover:text-[#913ffd] transition-colors cursor-pointer">
            Data Security
          </li>
          <li className="hover:text-[#913ffd] transition-colors cursor-pointer">
            Terms & Conditions
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
