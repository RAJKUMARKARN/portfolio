import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'About Me', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact Me', href: '#contact' },
  ];

  return (
    <div className="w-full bg-black text-white fixed top-0 left-0 right-0 z-50">
      {/* Navbar Container with backdrop blur */}
      <nav className="max-w-[1280px] mx-auto px-4 py-3 sm:py-4 flex justify-between items-center backdrop-blur-md bg-black/80 border-b border-[#1a1a1a]">
        {/* Logo */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <img className="h-[28px] w-[28px] sm:h-[33px] sm:w-[33px]" src="logo.png" alt="Logo" />
          <div className="hidden sm:block">
            <h4 className="text-[14px] sm:text-[16px] font-Worksans font-bold text-[#C7C7C7]">Raj Kumar Karn</h4>
            <p className="text-[#474747] font-semibold text-[10px] sm:text-[11px]">Frontend/UI/UX Developer</p>
          </div>
          <h4 className="sm:hidden text-[14px] font-Worksans font-bold text-[#C7C7C7]">RKK</h4>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-8 rounded-[25px] px-6 py-2">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="text-[#C6C6C6] text-[14px] font-michroma hover:text-white transition duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger for Mobile - Better styling */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden focus:outline-none z-50 p-2 rounded-md hover:bg-[#1a1a1a] transition"
          aria-label="Toggle menu"
        >
          <img src="menu.png" alt="Menu" className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </nav>

      {/* Mobile Dropdown - Absolute positioned with better styling */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
      >
        <ul className="flex flex-col bg-[#0a0a0a]/95 backdrop-blur-xl border border-[#2B2B2B] rounded-2xl mx-3 mt-2 py-4 px-3 space-y-1 shadow-xl">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="text-[#C6C6C6] text-[14px] font-michroma hover:text-white hover:bg-[#1a1a1a] transition duration-300 block py-3 px-4 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay backdrop when menu is open */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
          style={{ top: '70px' }}
        />
      )}
    </div>
  );
};

export default Nav;
