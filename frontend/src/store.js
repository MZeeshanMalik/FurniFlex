import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/cart/CartSlice";

// Middleware to sync cart state with localStorage
const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const cartState = store.getState().cart;
  localStorage.setItem("cart", JSON.stringify(cartState));
  return result;
};

// Load cart state from localStorage on app initialization
const loadFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : undefined;
};

// Create the store with the middleware
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: loadFromLocalStorage(),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
export default store;
