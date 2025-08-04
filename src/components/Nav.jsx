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
    <div className="w-full bg-black text-white">
      {/* Navbar Container */}
      <nav className="max-w-[1280px] mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img className="h-[33px] w-[33px]" src="logo.png" alt="Logo" />
          <div>
            <h4 className="text-[16px] font-Worksans font-bold text-[#C7C7C7]">Raj Kumar Karn</h4>
            <p className="text-[#474747] font-semibold text-[11px]">Frontend/UI/UX Developer</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-8  rounded-[25px] px-6 py-2">
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
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden focus:outline-none">
          <img src="menu.png" alt="Menu" className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col bg-[#101010] border rounded-xl mx-4 mb-4 py-4 px-4 space-y-3">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="text-[#C6C6C6] text-[14px] font-michroma hover:text-white transition duration-300"
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
