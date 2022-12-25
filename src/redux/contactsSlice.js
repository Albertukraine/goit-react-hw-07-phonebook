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
  reducers: {
  
   
  },
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
      // console.log("pending");
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.value = [...action.payload];
      // console.log("fulfilled");
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      // console.log("error");

    },
    [deleteContact.fulfilled](state, action) {
      // console.log("delete click");
      // console.log(state.value);
      // console.log(action.payload.id);
      const index = state.value.findIndex(
        contact => contact.id === action.payload.id
      );
      state.value.splice(index, 1);

      },

     [setContact.fulfilled](state, action) {
      state.value.push(action.payload);
     } 
  },
});

