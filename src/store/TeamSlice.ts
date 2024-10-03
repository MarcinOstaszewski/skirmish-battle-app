import { createSlice } from "@reduxjs/toolkit";
import getInitialTeamData from "../helpers/getInitialTeamData";

const initialTeam = getInitialTeamData();

export const teamSlice = createSlice({
  name: 'team',
  initialState: initialTeam,
  reducers: {
    updateTeamMembers(state, action) {
      state.teamMembers = action.payload;
    },
  },
});

export const teamSliceReducer = teamSlice.reducer;
export const teamActions = teamSlice.actions;