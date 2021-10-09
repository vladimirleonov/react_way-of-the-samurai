import profileReducer from "./profile-reducer";

const state = {
    postData: [
        { id: 1, text: 'fsreggx fgh fhgfhf', likeCount: 12},
        { id: 2, text: 'gjgjgh fhg', likeCount: 9},
        { id: 3, text: 'qwerty', likeCount: 11}
    ],
    status: 'empty'
}

test('length of postData array should be 4', () => {
    const newState = profileReducer(state,{type: 'ADD-POST', newPostValue: 'new post'});
    expect(newState.postData.length).toBe(4);
})

test('message should be added by my rightly', () => {
    const newState = profileReducer(state,{type:'ADD-POST', newPostValue: 'new post'});
    expect(newState.postData[3].text).toBe('new post');
})

test('status should be added', () => {
    const newState = profileReducer(state,{type: 'UPDATE-USER-STATUS', status: 'new status'});
    expect(newState.status).toBe('new status');
})