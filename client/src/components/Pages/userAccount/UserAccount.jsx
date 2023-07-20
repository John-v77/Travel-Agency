import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Ameneties from '../../Features/ameneties/Ameneties';
import { addToCart } from '../../../store/slices/shoppingCartSlice';

function UserAccount(props) {
  const { userInfo } = useSelector((state) => state.user);
  const userName = userInfo ? userInfo.userName : null;

  const dispatch = useDispatch();
  const { noOfItems, listOfShopping } = useSelector((state) => state.cart);

  console.log(noOfItems, listOfShopping, 'list of shopping - userCart');

  return (
    <div className=''>
      <img
        src='https://www.wallpaperup.com/uploads/wallpapers/2013/09/29/153361/44e5a3fd8a183ce3ab4d2130ba1b66bb.jpg'
        className='w-full h-20 object-cover object-top '
      />
      <div className='flex justify-end mt-12 p-10'>
        <div className='mr-4'>
          <h3>{'userName'}</h3>
          <p>{'email address'}</p>
        </div>
        <img
          src='https://cdn-icons-png.flaticon.com/512/666/666201.png'
          className='w-14 h-14'
        />
      </div>

      <div>
        <button
          onClick={() =>
            dispatch(
              addToCart({
                id: '21',
                name: 'Mexico',
                price: 500,
                description: 'lala',
              })
            )
          }
        >
          add to list
        </button>
      </div>
      {/* <Ameneties /> */}
    </div>
  );
}

export default UserAccount;
