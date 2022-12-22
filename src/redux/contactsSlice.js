import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const contactSlice = createSlice({
  name: 'numberValue',
  initialState,
  reducers: {
    setContact(state, action) {
      state.value.push(action.payload);
      console.log("set contact action");
    },
    deleteContact(state, action) {
      const index = state.value.filter(
        contact => contact.id === action.payload
      );
      state.value.splice(index, 1);
    },
  },
});
export const { setContact, deleteContact } = contactSlice.actions;
