import { createSlice } from "@reduxjs/toolkit";

export const isEditedCurrentCharacterSlice = createSlice({
  name: 'isEditedCurrentCharacter',
  initialState: { isEditedCurrentCharacter: false },
  reducers: {
    setIsEditedCurrentCharacter(state, action) {
      state.isEditedCurrentCharacter = action.payload;
    },
  },
});

export const isEditedCurrentCharacterSliceReducer = isEditedCurrentCharacterSlice.reducer;
export const isEditedCurrentCharacterActions = isEditedCurrentCharacterSlice.actions;