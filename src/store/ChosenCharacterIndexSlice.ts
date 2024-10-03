import { createSlice } from "@reduxjs/toolkit";

export const chosenCharacterIndexSlice = createSlice({
  name: 'setCharacterIndex',
  initialState: { chosenCharacterIndex: 0 },
  reducers: {
    setCharacterIndex(state, action) {
      state.chosenCharacterIndex = action.payload;
    },
  },
});

export const chosenCharacterIndexSliceReducer = chosenCharacterIndexSlice.reducer;
export const chosenCharacterIndexActions = chosenCharacterIndexSlice.actions;