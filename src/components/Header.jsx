import React, { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-primary-bg border-b border-light-divider">
      <div className="flex justify-between items-center px-8 py-4">
        <Logo></Logo>

        <div
          className="md:hidden  text-primary-txt cursor-pointer"
          onClick={toggleNavbar}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" /> // Icon X khi mở
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" /> // Icon 3 gạch khi đóng
            )}
          </svg>
        </div>

        <div className="hidden md:flex gap-8 items-center">
          <NavLinks></NavLinks>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-secondary-bg absolute w-full left-0 z-50 border-b border-light-divider `}
      >
        <div className="flex flex-col p-4 gap-6 items-center">
          <NavLinks onClick={() => setIsOpen(false)}></NavLinks>
        </div>
      </div>
    </nav>
  );
};

export default Header;
