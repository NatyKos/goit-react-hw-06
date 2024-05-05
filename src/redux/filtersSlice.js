import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: '',
  },
  reducers: {
    changeFilter: {
      reduser: (state, action) => {
        state.name.filter(contact => {
          contact.name
            .toLowerCase()
            .includes(state.filters.toLowerCase().trim()=action.payload);
        });
      },
      prepare: name => {
        return { payload: name };
      },
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
