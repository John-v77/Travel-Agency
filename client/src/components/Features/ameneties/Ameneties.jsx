import React from 'react';
import { ameneties } from '../../../data/data';
import AmenetiesCard from './AmenetiesCard';
function Ameneties(props) {
  return (
    <div className='max-w-[1600px] mx-auto  py-16 grid grid-cols-2 gap-3 lg:grid-cols-3 xl:gap4'>
      {ameneties.map((item, index) => {
        return <AmenetiesCard bg={item.image} text={item.name} />;
      })}
    </div>
  );
}

export default Ameneties;
