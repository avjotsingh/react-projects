import { configureStore, createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: INITIAL_STATE,
    reducers: {
        increment(state, action) {
            state.counter += action.payload.amount ? action.payload.amount : 1;
        },
        decrement(state, action) {
            state.counter -= action.payload.amount ? action.payload.amount : 1;
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        }
    }
});

export const counterActions = counterSlice.actions;

const store = configureStore({
    reducer: counterSlice.reducer
});

export default store;