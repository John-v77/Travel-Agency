import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <div className='w-full   py-6 bg-gray-100 px-4'>
      <div className='max-w-[1600px] flex flex-col md:flex-row justify-between items-center text-center'>
        <h1>Travel.</h1>
        <div className='w-full py-4 flex justify-between sm:max-w-[280px] '>
          <FaFacebook className='icon' />
          <FaTwitter className='icon' />
          <FaInstagram className='icon' />
          <FaPinterest className='icon' />
          <FaYoutube className='icon' />
        </div>
      </div>
      <div className='flex justify-between py-1'>
        <ul className='lg:flex'>
          <li className='lg:pl-0'>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/page1'>Page1</Link>
          </li>
          <li>
            <Link to='/page2'>Page2</Link>
          </li>
        </ul>
        <ul className='text-right lg:flex'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/page1'>Page1</Link>
          </li>
          <li className='lg:pr-0'>
            <Link to='/page2'>Page2</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
