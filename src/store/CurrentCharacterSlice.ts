import { createSlice } from "@reduxjs/toolkit";
import { ITeamMember } from "../interfaces";

export const currentCharacterSlice = createSlice({
  name: 'currentCharacterData',
  initialState: { currentCharacterData: {} as ITeamMember },
  reducers: {
    setCurrentCharacterData(state, action) {
      state.currentCharacterData = action.payload;
    },
  },
});

export const currentCharacterSliceReducer = currentCharacterSlice.reducer;
export const currentCharacterActions = currentCharacterSlice.actions;