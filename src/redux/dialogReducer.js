const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Victor' },
    { id: 6, name: 'Valera' },
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'How your it-kamasutra?' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Hello' },
    { id: 6, message: 'Good morning' },
  ],
  newMessageText: ''
};

const dialogReducer = (state = initialState, action) => {
   switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageText;
      return{
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
        newMessageText: ''
      };
    case UPDATE_NEW_MESSAGE_TEXT:
    return {
        ...state,
        newMessageText: action.body
      };
    default:
      return state;

  }

}
export const sendMessageCreator = () => {
  return ({
    type: SEND_MESSAGE

  }
  )
}
export const updateNewMessageTextCreator = (body) => {
  return ({
    type: UPDATE_NEW_MESSAGE_TEXT, body: body

  }
  )
}

export default dialogReducer;