import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
         // If the item is already in the cart, increment the quantity
         existingItem.quantity += 1;
       } else {
         // If the item is not in the cart, add a new item and set initial quantity to 1
         state.items.push({ ...newItem, quantity: 1 });
       }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          // If the quantity is 1, remove the item from the cart
          state.items = state.items.filter((item) => item.id !== itemId);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
