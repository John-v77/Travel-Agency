import { createSlice } from '@reduxjs/toolkit';

const initialValue = {
  noOfItems: 0,
  listOfShopping: [
    // '21',
    // '22',
    // '23',
    { id: '23', name: 'dubai', price: 500, description: 'lala', qty: 1 },
    { id: '22', name: 'miami', price: 500, description: 'lalal', qty: 2 },
    { id: '21', name: 'Mexico', price: 500, description: 'lala', qty: 3 },
  ],
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: initialValue,
  reducers: {
    addToCart: (state, productToAdd) => {
      console.log('what is the product to add: =>', productToAdd.payload.id);
      state.noOfItems += 1;

      const listOfShopping = state.listOfShopping;

      //   listOfShopping.forEach((el) => console.log(el.id, 'k21'));
      console.log('list of shopping: ', listOfShopping);

      const existingCartitem = listOfShopping.find((cartItem) => {
        // console.log(cartItem.name, 'cartItem- if exists');
        // console.log(productToAdd.payload.id, '456666');
        return cartItem.id === productToAdd.payload.id;
      });

      console.log(existingCartitem.id, 'existing cartItem');

      //   increase qty of an existing item in shopping cart
      if (existingCartitem) {
        // console.log('we found a duplicate');
        state.listOfShopping = listOfShopping.map((cartItem) => {
          if (cartItem.id === productToAdd.payload.id) {
            return { ...cartItem, qty: cartItem.qty + 1 };
          }
        });
      }

      state.listOfShopping = [
        ...state.listOfShopping,
        { ...productToAdd, qty: 1 },
      ];
    },
  },
  extraReducers: {},
});

export const { addToCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
