import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

function Navbar(props) {
  const [mobNav, setMobNav] = useState(false);

  const handleNav = () => {
    setMobNav(!mobNav);
  };
  return (
    <div className='bg-gray-100 w-full p-4 flex justify-between'>
      <h1 className=''>Travel.</h1>
      <ul className='hidden md:flex'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/page1'>Page1</Link>
        </li>
        <li>
          <Link to='/page2'>Page2</Link>
        </li>
      </ul>

      <div className='hidden md:flex'>
        <BiSearch size={20} />
        <BsPerson size={20} />
      </div>

      <div onClick={handleNav} className='md:hidden  z-10 mobile-menu-btn'>
        {mobNav ? (
          <AiOutlineClose size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      <div
        className={
          mobNav
            ? 'mobile-menu w-full absolute left-0 top-0 bg-gray-200 p-4 px-4 md:hidden'
            : 'hidden'
        }
      >
        <h1 className=''>Travel.</h1>
        <ul className='flex flex-col md:hidden '>
          <li className='mobileLi'>
            <Link to='/'>Home</Link>
          </li>
          <li className='mobileLi'>
            <Link to='/page1'>Page1</Link>
          </li>
          <li className='mobileLi'>
            <Link to='/page2'>Page2</Link>
          </li>
        </ul>

        <div className='flex flex-col'>
          <button className='my-6'>Search</button>
          <button className=''>Account</button>
        </div>

        {/* <div className='flex justify-between mt-8 px-0.5'>
          <FaFacebook className='icon' />
          <FaTwitter className='icon' />
          <FaInstagram className='icon' />
          <FaPinterest className='icon' />
          <FaYoutube className='icon' />
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
