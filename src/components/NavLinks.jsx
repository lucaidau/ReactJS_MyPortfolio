import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ onClick }) => {
  const baseClass = ({ isActive }) => {
    return `transition-all duration-300 border-b-2 pb-5 -mb-[17px] flex items-center h-full ${
      isActive
        ? "text-primary-accent border-primary-accent"
        : "text-secondary-txt border-transparent hover:text-primary-txt"
    }`;
  };

  return (
    <>
      <NavLink to={"/"} onClick={onClick} className={baseClass}>
        Home
      </NavLink>

      <NavLink to={"/projects"} onClick={onClick} className={baseClass}>
        Projects
      </NavLink>
      <NavLink to={"/contact"} onClick={onClick} className={baseClass}>
        Contact
      </NavLink>
    </>
  );
};

export default NavLinks;
