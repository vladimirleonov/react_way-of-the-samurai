import messagesReducer from "./messages-reducer";

const state = {
    messages: [
        {id: 1, userName: "Dimych", message: "sfs fsddgfd gdf gfdgdgdf gfghjkh ry"},
        {id: 2, userName: "Me", message: "sdfwre ertreyrt yrtyry yryrgf ddghgtj tuytyrd dfgsdg gg ryryrthf ryrtyrt"},
        {id: 3, userName: "Dimych", message: "qe wer werwrwr wgdghty jjyjju yujyukgf ertd ewdsgdgetw ete"}
    ]
}

test('length of array should be 4', () => {
    const newState = messagesReducer(state, {type: 'ADD-MESSAGE', newMessageValue: 'new message'});
    expect(newState.messages.length).toBe(4);
})

test('message should added by me rightly', () => {
    const newState = messagesReducer(state, {type: 'ADD-MESSAGE', newMessageValue: 'new message'});
    expect(newState.messages[3].message).toBe('new message');
})