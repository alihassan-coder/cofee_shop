import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#5A3E2B] shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#FAF1E6]">Coffee Shop</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <ul className="flex space-x-4">
                <li>
                  <Link 
                    to="/home" 
                    className="rounded-md px-3 py-2 text-sm font-medium text-[#FAF1E6] hover:bg-[#705540] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="rounded-md px-3 py-2 text-sm font-medium text-[#FAF1E6] hover:bg-[#705540] transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/menu" 
                    className="rounded-md px-3 py-2 text-sm font-medium text-[#FAF1E6] hover:bg-[#705540] transition-colors"
                  >
                    Menu
                  </Link>
                </li>
              </ul>
              
              <div className="relative ml-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-48 rounded-md border border-[#A68B6A] bg-[#705540] px-4 py-2 text-[#FAF1E6] placeholder-[#A68B6A] focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-[#FAF1E6] hover:bg-[#705540] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
              to="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-[#FAF1E6] hover:bg-[#705540]"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-[#FAF1E6] hover:bg-[#705540]"
            >
              About
            </Link>
            <Link
              to="/menu"
              className="block rounded-md px-3 py-2 text-base font-medium text-[#FAF1E6] hover:bg-[#705540]"
            >
              Menu
            </Link>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-md border border-[#A68B6A] bg-[#705540] px-4 py-2 text-[#FAF1E6] placeholder-[#A68B6A] focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
