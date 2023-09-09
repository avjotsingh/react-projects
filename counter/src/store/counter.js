import { createSlice } from "@reduxjs/toolkit"

const initialCounterState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state, action) {
            state.counter += action.payload.amount ? action.payload.amount : 1;
        },
        decrement(state, action) {
            state.counter -= action.payload.amount ? action.payload.amount : 1;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export default counterSlice;