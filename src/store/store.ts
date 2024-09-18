import { createSlice, configureStore } from '@reduxjs/toolkit';
import { initialTeam } from '../constants/initialTeam';
import { ITeamMember } from '../interfaces';

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
    setIsEditedCurrentCharacter(state, action) {
      state.isEditedCurrentCharacter = action.payload;
    },
  },
});

const currentCharacterSlice = createSlice({
  name: 'currentCharacterData',
  initialState: { currentCharacterData: {} as ITeamMember },
  reducers: {
    setCurrentCharacterData(state, action) {
      state.currentCharacterData = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    imageWidth: imageWidthSlice.reducer,
    team: teamSlice.reducer,
    chosenCharacterIndex: chosenCharacterIndexSlice.reducer,
    isEditedCurrentCharacter: isEditedCurrentCharacterSlice.reducer,
    currentCharacter: currentCharacterSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;

export const imageWidthActions = imageWidthSlice.actions;
export const teamActions = teamSlice.actions;
export const chosenCharacterIndexActions = chosenCharacterIndexSlice.actions;
export const isEditedCurrentCharacterActions = isEditedCurrentCharacterSlice.actions;
export const currentCharacterDataActions = currentCharacterSlice.actions;

export default store;