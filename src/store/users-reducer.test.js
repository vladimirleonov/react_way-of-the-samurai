import usersReducer from "./users-reducer";

const state = {
    users: [
        /*{id: 1, userName: 'Dmitry K.', subscription: false, status: "I'm looking for a job", location: {country: 'Belarus', city: 'Minsk'}},
        {id: 2, userName: 'Svetlana D.', subscription: false, status: "I'm ready to help you", location: {country: 'Russia', city:'Moscow'}},
        {id:3, userName: 'Sergei S.', subscription: false, status: "I'm like football", location: {country: 'Ukrane', city: 'Kiev'}}*/
    ],
    totalUsersCount: null,
    pageSize: 5,
    currentPage: 1,
    isLoading: false,
    arrayUsersWithDisabledId: []
}

test('user should be added check users length', () => {
    const users = [{id: 1, userName: 'Dmitry K.', subscription: false, status: "I'm looking for a job", location: {country: 'Belarus', city: 'Minsk'}},
        {id: 2, userName: 'Svetlana D.', subscription: false, status: "I'm ready to help you", location: {country: 'Russia', city:'Moscow'}},
        {id:3, userName: 'Sergei S.', subscription: false, status: "I'm like football", location: {country: 'Ukrane', city: 'Kiev'}}]
    const newState = usersReducer(state, {type: 'SET-USERS', users});
    expect(newState.users.length).toBe(3);
})

test('check totalUsersCount', () => {
    const newState = usersReducer(state, {type: 'SET-TOTAL-USERS-COUNT', totalUsersCount: 100});
    expect(newState.totalUsersCount).toBe(100);
})

test('check currentPage', () => {
    const newState = usersReducer(state, {type: 'SET-CURRENT-PAGE', currentPage: 2});
    expect(newState.currentPage).toBe(2);
})

test('check isLoading', () => {
    const newState = usersReducer(state, {type: 'IS-LOADING', isLoading: true});
    expect(newState.isLoading).toBe(true);
})

test('add button with disabled id in array', () => {
    const newState = usersReducer(state, {type: 'CHANGE-BUTTON-CONDITION', isChangingBtnCondition: true, userId: 3});
    expect(newState.arrayUsersWithDisabledId[0]).toBe(3);
})

test('check length of arrayUsersWithDisabledId', () => {
    const newState = usersReducer(state, {type: 'CHANGE-BUTTON-CONDITION', isChangingBtnCondition: true, userId: 3});
    expect(newState.arrayUsersWithDisabledId.length).toBe(1);
})
