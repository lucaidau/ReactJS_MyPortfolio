import React from "react";
import logoUrl from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <NavLink to="/" className="flex gap-8  font-medium">
        <img src={logoUrl} alt="nav-logo" width="24" height="24" />
        <span>Đỗ Hỷ Toàn</span>
      </NavLink>
    </div>
  );
};

export default Logo;
