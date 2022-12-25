import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';
import axios from 'axios';

const initialState = {
  value: [],
  isLoading: false,
  error: null,
};

fetchContacts();

export const contactSlice = createSlice({
  name: 'numberValue',
  initialState,
  reducers: {
    // setContact(state, action) {
    //   state.value.push(action.payload);
    //   console.log('set contact action');
    // },
    deleteContact(state, action) {
      const index = state.value.filter(
        contact => contact.id === action.payload
      );
      state.value.splice(index, 1);
    },
   
  },
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
      console.log("pending");
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.value = [...action.payload];
      console.log("fulfilled");
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      console.log("error");

    },
  },
});
export const {
  setContact,
  deleteContact,
//  fetchContacts,
} = contactSlice.actions;
