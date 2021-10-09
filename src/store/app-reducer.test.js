import appReducer from "./app-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

const state = {
    isInitialized: false
}

test('initial state should be true', () => {
    const newState = appReducer(state, {type: SET_INITIALIZED});
    expect(newState.isInitialized).toBe(true)
})