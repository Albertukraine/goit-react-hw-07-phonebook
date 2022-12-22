import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filterValue',
  initialState: '',
  reducers: {
    setFilterValue(state, action) {
      return (state = action.payload);
    },
  },
});
export const { setFilterValue } = filterSlice.actions;

// export default filterSlice.reducer;
