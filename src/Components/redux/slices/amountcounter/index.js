import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Array to hold items in the cart
  total: 0, // Total price of items in the cart
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;

        // If it's a new item, add it to the cart
        state.items.push({newItem});
      // Update the total price
      state.total += newItem.price;
    }
  },
});

export const { addItem} = cartSlice.actions;

export default cartSlice.reducer;
