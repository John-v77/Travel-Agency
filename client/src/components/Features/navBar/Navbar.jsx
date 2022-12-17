import React from 'react';
import { Link } from 'react-router-dom';
function Navbar(props) {
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
        <p>search</p>
        <p>login</p>
      </div>
    </div>
  );
}

export default Navbar;
