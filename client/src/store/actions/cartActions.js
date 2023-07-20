import { createAsyncThunk } from '@reduxjs/toolkit';
import actions from '../../api';

export const addToCart = createAsyncThunk(
  'cart/add',
  async ({ cartItems, productToAdd }) => {
    try {
      const existingCartitems = await actions.loginUser(email, password);
      console.log(items, 'items from cart');
    } catch (err) {
      console.log(err);
    }
  }
);
