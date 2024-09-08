import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const itemExists = state.cart.some(
        (item) => item.id === action.payload.id
      );
      if (!itemExists) {
        state.cart.push(action.payload);
      }
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increasQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.itemQuantity++;
      item.totalPrice = item.itemQuantity * item.price;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.itemQuantity--;
      item.totalPrice = item.itemQuantity * item.price;
    },
  },
});

export const { addItem, deleteItem, decreaseQuantity, increasQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart;

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrntQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;
