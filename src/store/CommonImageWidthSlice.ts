import { createSlice } from "@reduxjs/toolkit";

export const commonImageWidthSlice = createSlice({
  name: 'commonImageWidth',
  initialState: { commonImageWidth: null },
  reducers: {
    setCommonImageWidth(state, action) {
      state.commonImageWidth = action.payload;
    },
  },
});

export const commonImageWidthSliceReducer = commonImageWidthSlice.reducer;
export const commonImageWidthActions = commonImageWidthSlice.actions;
