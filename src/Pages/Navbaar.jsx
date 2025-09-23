import React from "react";
import { Link } from "react-router-dom";

export default function Navbaar() {
  return (
    <nav className="flex flex-row justify-between items-center bg-green-200 w-full px-3 py-2 md:px-10 md:py-4">
  
      <div>
        <h6 className="text-lg font-bold">Jarurat Care</h6>
      </div>

      {/* Links */}
      <div className="flex gap-4 md:gap-8 text-sm md:text-base">
        <Link to="/" className="hover:text-green-700">Home</Link>
        <Link to="/patient" className="hover:text-green-700">Patient</Link>
        <Link to="/about" className="hover:text-green-700">About</Link>
      </div>
    </nav>
  );
}
