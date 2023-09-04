// import { createStore } from 'redux';
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
            state.counter += action.amount ? action.amount : 1;
        },
        decrement(state, action) {
            state.counter -= action.amount ? action.amount : 1;
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        }
    }
});

// const counterReducer = (state = INITIAL_STATE, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     } else if (action.type === 'decrement') {
//         return {
//             counter: state.counter - action.amount,
//             showCounter: state.showCounter
//         }
//     } else if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }

//     return state;
// }

// const store = createStore(counterSlice.reducer);

const store = configureStore(counterSlice.reducer)

export default store;