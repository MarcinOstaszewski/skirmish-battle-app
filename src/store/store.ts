import { createSlice, configureStore } from '@reduxjs/toolkit';
import { initialTeam } from '../constants/initialTeam';

const imageWidthSlice = createSlice({
  name: 'commonImageWidth',
  initialState: { commonImageWidth: null },
  reducers: {
    setCommonImageWidth(state, action) {
      state.commonImageWidth = action.payload;
    },
  },
});

const teamSlice = createSlice({
  name: 'team',
  initialState: initialTeam,
  reducers: {
    updateTeamMembers(state, action) {
      state.teamMembers = action.payload;
    },
  },
});

const chosenCharacterIndexSlice = createSlice({
  name: 'setCharacterIndex',
  initialState: { chosenCharacterIndex: 0 },
  reducers: {
    setCharacterIndex(state, action) {
      state.chosenCharacterIndex = action.payload;
    },
  },
});

const isEditedCurrentCharacterSlice = createSlice({
  name: 'isEditedCurrentCharacter',
  initialState: { isEditedCurrentCharacter: false },
  reducers: {
    setIsEditedCurrentCharachter(state, action) {
      state.isEditedCurrentCharacter = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    imageWidth: imageWidthSlice.reducer,
    team: teamSlice.reducer,
    chosenCharacterIndexSlice: chosenCharacterIndexSlice.reducer,
    isEditedCurrentCharacterSlice: isEditedCurrentCharacterSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;

export const imageWidthActions = imageWidthSlice.actions;
export const teamActions = teamSlice.actions;
export const chosenCharacterIndexActions = chosenCharacterIndexSlice.actions;
export const isEditedCurrentCharacterActions = isEditedCurrentCharacterSlice.actions;

export default store;