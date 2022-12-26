import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, setContact } from './operations';

const initialState = {
  value: [],
  isLoading: false,
  error: null,
};

fetchContacts();

export const contactSlice = createSlice({
  name: 'numberValue',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
      // console.log("pending");
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.value = [...action.payload];
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending](state, action) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      const index = state.value.findIndex(
        contact => contact.id === action.payload.id
      );
      state.value.splice(index, 1);
      state.isLoading = false;
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [setContact.pending](state, action) {
      state.isLoading = true;
    },

    [setContact.fulfilled](state, action) {
      state.value.push(action.payload);
      state.isLoading = false;
    },
    [setContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
