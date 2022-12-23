import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { contactSlice } from './contactsSlice';




export const store = configureStore({
  reducer: {
    numberValue: contactSlice.reducer,
    filterValue: filterSlice.reducer,
  },

});


