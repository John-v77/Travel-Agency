import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ('https://www.wallpaperup.com/uploads/wallpapers/2013/09/29/153361/44e5a3fd8a183ce3ab4d2130ba1b66bb.jpg');
function Login(props) {
  const user = { userName: null, pswd: null };

  const [userZ, setUser] = useState(user);

  const recordInput = (e) => {
    const { name, value } = e.target;

    setUser({ ...userZ, [name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log('submitting');
  };

  return (
    <div className=''>
      <img
        src='https://www.wallpaperup.com/uploads/wallpapers/2013/09/29/153361/44e5a3fd8a183ce3ab4d2130ba1b66bb.jpg'
        className='w-full h-20 object-cover object-top '
      />

      <div className='my-20'>
        <h2 className='text-2xl text-center my-4 md:my-6'>Login</h2>
        <div className='form  p-2 md:p3 rounded-md  max-w-xl mx-auto my-4'>
          <form className='w-full border border-black rounded-md p-3 md:p-4'>
            <div className='flex flex-col my-2'>
              <label className='mx-1'>Username</label>
              <input
                onChange={recordInput}
                className='border rounded-md p-2'
                type='text'
                name='userName'
              />
            </div>
            <div className='flex flex-col my-4'>
              <label className='mx-1'>Password</label>

              <input
                className='border rounded-md p-2'
                onChange={recordInput}
                type='password'
                name='pswd'
              />
            </div>

            <button className='w-full my-4'>Login In</button>
          </form>
          <div className='text-right mx-3'>
            <p>
              Don't have an account?
              <Link to='/account'>
                <b> Register </b>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
