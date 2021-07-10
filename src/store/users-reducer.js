const CHANGE_SUBSCRIPTION = 'CHANGE-SUBSCRIPTION';
const SHOW_MORE_USERS = 'SHOW-MORE-USERS';

const initialState = {
    usersData: [
        {userName: 'Dmitry K.', subscription: 'Follow', status: "I'm looking for a job", location: {country: 'Belarus', city: 'Minsk'}},
        {userName: 'Svetlana D.', subscription: 'Follow', status: "I'm ready to help you", location: {country: 'Russia', city:'Moscow'}},
        {userName: 'Sergei S.', subscription: 'Follow', status: "I'm like football", location: {country: 'Ukrane', city: 'Kiev'}}
    ]
}

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case CHANGE_SUBSCRIPTION: {
            return {

            }
        }
        case SHOW_MORE_USERS: {
            return {

            }
        }
        default: {
            return state
        }
    }
}

export default usersReducer