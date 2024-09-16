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
        setTeamName(state, action) {
            state.name = action.payload;
        },
    },
});

const store = configureStore({
    reducer: {
        imageWidth: imageWidthSlice.reducer,
        team: teamSlice.reducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;

export const imageWidthActions = imageWidthSlice.actions;
export const teamActions = teamSlice.actions;

export default store;