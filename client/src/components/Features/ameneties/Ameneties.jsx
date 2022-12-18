import React from 'react';
import { ameneties } from '../../../data/data';
import AmenetiesCard from './AmenetiesCard';
function Ameneties(props) {
  return (
    <div className='max-w-[1600px] mx-auto  py-16 '>
      <div className='p-4'>
        <h1>Amazing ameneties</h1>
        <p>have a great time</p>
      </div>
      <div className='grid grid-cols-2 gap-3 lg:grid-cols-3 xl:gap4'>
        {ameneties.map((item, index) => {
          return <AmenetiesCard bg={item.image} text={item.name} />;
        })}
      </div>
    </div>
  );
}

export default Ameneties;
