import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    hasChanged: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addItemToCart(state, action) {
      const item = action.payload;
      const idx = state.items.findIndex((x) => x.id === item.id);
      state.totalQuantity += 1;
      state.hasChanged = true;
      if (idx === -1) {
        state.items.push({
          id: item.id,
          name: item.name,
          quantity: 1,
          price: item.price,
          totalPrice: item.price,
        });
      } else {
        state.items[idx].quantity += 1;
        state.items[idx].totalPrice += item.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const idx = state.items.findIndex((x) => x.id === id);
      if (idx === -1) {
        return;
      } else {
        state.totalQuantity -= 1;
        state.hasChanged = true;
        if (state.items[idx].quantity === 1) {
          const res = state.items.filter((x) => x.id !== id);
          console.log(res);
          state.items = state.items.filter((x) => x.id !== id);
        } else {
          state.items[idx].quantity -= 1;
          state.items[idx].totalPrice -= state.items[idx].price;
        }
      }

      // console.log(state);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
