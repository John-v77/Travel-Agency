import React from 'react';

function Navbar(props) {
  return (
    <div className='bg-gray-100 w-full p-4 flex justify-between'>
      <h1 className=''>Travel.</h1>
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>Page1</li>
        <li>Page2</li>
      </ul>

      <div className='hidden md:flex'>
        <p>search</p>
        <p>login</p>
      </div>
    </div>
  );
}

export default Navbar;
