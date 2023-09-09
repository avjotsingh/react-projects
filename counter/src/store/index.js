

export const counterActions = counterSlice.actions;
export const authenticationActions = authenticationSlice.actions;

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authenticationSlice.reducer
    }
});

export default store;