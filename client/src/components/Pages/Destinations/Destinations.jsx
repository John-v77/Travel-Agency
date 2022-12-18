import React from 'react';

function Destinations(props) {
  return (
    <div className='max-w-[1600px] mx-auto md:p-0'>
      <div className='max-h-[500px] relative'>
        <div className='absolute w-full h-full max-h-[500px] bg-black/40 flex flex-col justify-center text-gray-200 text-center'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            The Best Travel Experience
          </h1>
        </div>
        <img
          className='w-full max-h-[500px] object-cover'
          //   src='https://jeunessetravel.com/wp-content/uploads/jeunesse-travel-video-thumbnail.jpg?auto=compress@cs=tinysrgb@w=1260&h=750&pr=2'
          src='https://imageio.forbes.com/specials-images/dam/imageserve/1171238184/0x0.jpg?format=jpg&width=1600'
          alt='/'
        />
      </div>
    </div>
  );
}

export default Destinations;
