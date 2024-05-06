import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter: {
      reduser: (state, action) => {
        console.log(state.name);
        state.name = action.payload;
      },
      // prepare: name => {
      //   return {
      //     payload: name,
      //   };
      // },
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
export const selectNameFilter = state => state.filters.name;
