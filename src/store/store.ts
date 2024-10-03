import { configureStore } from '@reduxjs/toolkit';
import { commonImageWidthSliceReducer } from './CommonImageWidthSlice';
import { teamSliceReducer } from './TeamSlice';
import { chosenCharacterIndexSliceReducer } from './ChosenCharacterIndexSlice';
import { isEditedCurrentCharacterSliceReducer } from './IsEditedCurrentCharacterSlice';
import { currentCharacterSliceReducer } from './CurrentCharacterSlice';

const store = configureStore({
  reducer: {
    imageWidth: commonImageWidthSliceReducer,
    team: teamSliceReducer,
    chosenCharacterIndex: chosenCharacterIndexSliceReducer,
    isEditedCurrentCharacter: isEditedCurrentCharacterSliceReducer,
    currentCharacter: currentCharacterSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;

export default store;