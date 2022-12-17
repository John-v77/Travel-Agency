import React from 'react';
import Hero from '../../Features/hero/Hero';
import DestinationBoard from '../../Features/destinationsBoard/DestinationBoard';

function Home(props) {
  return (
    <div className='max-w-[1600px] mx-auto'>
      <Hero />
      <DestinationBoard />
    </div>
  );
}

export default Home;
