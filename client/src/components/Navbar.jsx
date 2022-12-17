import React from "react";
import logo from "../assets/mountain_logo.png";
import hamburgerMenu from "../assets/ham_menu.png";

function Navbar(props) {
  return (
    <div className="a bg-slate-300 h-16 py-3.5 px-3 flex justify-between">
      <img src={logo} alt="logo" className="w-16 h-9" />
      <ul className="hidden sm:flex items-center">
        <li className="mx-3 font-semibold ">Home</li>
        <li className="mx-3 font-semibold">Packages</li>
        <li className="mx-3 font-semibold">Cart</li>
      </ul>

      <img
        src={hamburgerMenu}
        alt="menu icon"
        className="w-9 h-8 mt-0 sm:hidden"
      />
    </div>
  );
}

export default Navbar;
