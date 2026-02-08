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
      {/* Navbar Container */}
      <nav className="max-w-[1280px] mx-auto px-4 py-4 flex justify-between items-center bg-black">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img className="h-[33px] w-[33px]" src="logo.png" alt="Logo" />
          <div>
            <h4 className="text-[16px] font-Worksans font-bold text-[#C7C7C7]">Raj Kumar Karn</h4>
            <p className="text-[#474747] font-semibold text-[11px]">Frontend/UI/UX Developer</p>
          </div>
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

        {/* Hamburger for Mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden focus:outline-none z-50">
          <img src="menu.png" alt="Menu" className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Dropdown - Absolute positioned */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <ul className="flex flex-col bg-[#101010] border border-[#2B2B2B] rounded-xl mx-4 mt-2 py-4 px-4 space-y-3 shadow-lg">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="text-[#C6C6C6] text-[14px] font-michroma hover:text-white transition duration-300 block"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
