import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartReducer = createSlice({
  name: "cart reducer",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      return [...state, action.payload.item];
    },
    removeCartItem: (state, action) => {
      const newCartItems = state.filter((eachItem, eachItemIndex) => {
        return eachItemIndex !== action.payload.index;
      });
      return newCartItems;
    },
  },
});

export const cartReducerActions = cartReducer.actions;
export default cartReducer.reducer;
