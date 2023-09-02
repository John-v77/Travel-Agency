import React, { useState } from "react";
import { Link } from "react-router-dom";

import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";

function Navbar(props) {
  const [mobNav, setMobNav] = useState(false);

  const handleNav = () => {
    setMobNav(!mobNav);
  };
  return (
    <div className="w-full max-w-[1600px] p-4 flex justify-between absolute top-0  z-10 text-white bg-gray-600">
      <Link to="/">
        <h1 className="">Travel.</h1>
      </Link>
      <ul className="hidden md:flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/destinations">Destinations</Link>
        </li>
        <li>
          <Link to="/test">test</Link>
        </li>
      </ul>

      <div className="hidden md:flex">
        <BiSearch size={20} />
        <Link to="/account">
          <BsPerson size={20} />
        </Link>
      </div>

      <div onClick={handleNav} className="md:hidden  z-20 mobile-menu-btn ">
        {mobNav ? <AiOutlineClose size={20} className="text-black" /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      <div className={mobNav ? "md:hidden w-full h-[100vh] bg-gray-800/95 absolute left-0 top-0 z-10" : "hidden"}>
        <div className="bg-gray-100/95 p-4 px-4  text-black">
          <h1 className="">Travel.</h1>
          <ul onClick={handleNav} className="flex flex-col md:hidden ">
            <li className="mobileLi">
              <Link to="/" onClick={handleNav}>
                Home
              </Link>
            </li>
            <li className="mobileLi">
              <Link to="/destinations" onClick={handleNav}>
                Destinations
              </Link>
            </li>
            <li className="mobileLi">
              <Link to="/test" onClick={handleNav}>
                test
              </Link>
            </li>
          </ul>

          <div className="flex flex-col">
            <button className="my-6 border-none">Search</button>
            <button className="login border-none">
              <Link to="/account" onClick={handleNav}>
                Account
              </Link>
            </button>
          </div>

          <div className="flex justify-between mt-8 px-0.5">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
