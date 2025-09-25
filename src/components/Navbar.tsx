// src/components/Navbar.tsx

import { JSX, useState } from "react";
import { Link } from "react-scroll";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

interface NavLink {
  name: string;
  to: string;
}

export default function Navbar(): JSX.Element {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const navLinks: NavLink[] = [
    { name: "Home", to: "hero" },
    { name: "Features", to: "features" },
    { name: "Pricing", to: "pricing" },
    { name: "Reviews", to: "reviews" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 cursor-pointer">
          SmartWatchPro
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-700 hover:text-blue-500 font-medium"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Buy Now
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={handleNavToggle}>
            {navOpen ? (
              <XIcon className="h-6 w-6 text-gray-800" />
            ) : (
              <MenuIcon className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-white px-4 pt-4 pb-6 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setNavOpen(false)}
              className="block cursor-pointer text-gray-700 hover:text-blue-500 font-medium"
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Buy Now
          </button>
        </div>
      )}
    </header>
  );
}