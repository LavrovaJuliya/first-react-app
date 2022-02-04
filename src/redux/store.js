import profileReducer from "./profileReducer";
import dialogReducer from './dialogReducer';
import { sidebarReducer } from './sidebarReducer';



let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'How are you?', likesCount: 15 },
        { id: 2, message: 'It is myfirst post', likesCount: 20 },
        { id: 3, message: 'It is second post', likesCount: 20 },
        { id: 4, message: 'It is thirst post', likesCount: 20 },

      ],
      newPostText: 'it-kamasutra.com'
    },

    dialogsPage: {
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
    },
    sidebar: {
      friends: [
        { id: 1, name: 'Dymych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
      ]
    }
  },
  getState() { 
    return this._state;

  },
  subscribe(observe) {
    this._callSubscriber = observe;

  },
  _callSubscriber() {
    console.log('state changed');
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage,action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage,action);
    this._state.sidebar = sidebarReducer(this._state.sidebar,action);
    this._callSubscriber(this._state);

    
  }
}


export default store;
window.store = store;