import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0
  },
  reducers: {
    addItem: (state, action) => {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (!exists) {
        state.items.push({...action.payload, quantity: 1});
        state.total += 1;
      }
    },
    increment: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      item.quantity += 1;
      state.total += 1;
    },
    decrement: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item.quantity > 1) {
        item.quantity -= 1;
        state.total -= 1;
      }
    },
    removeItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      state.total -= item.quantity;
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  }
});

export const { addItem, increment, decrement, removeItem } = cartSlice.actions;
export const store = configureStore({ reducer: { cart: cartSlice.reducer } });