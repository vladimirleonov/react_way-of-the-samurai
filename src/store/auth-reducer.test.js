import authReducer from "./auth-reducer";

const state = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

test('user id should be 5', () => {
    const newState = authReducer(state, {type: 'SET-USER-AUTH-DATA', id: 5, email: 'qwerty', login: 'admin', isAuth: true});
    expect(newState.id).toBe(5);
    expect(newState.email).toBe('qwerty');
    expect(newState.login).toBe('admin');
    expect(newState.isAuth).toBe(true);
})

