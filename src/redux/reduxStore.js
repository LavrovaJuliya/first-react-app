import {combineReducers, createStore} from "redux";
import profileReducer from './profileReducer';
import dialogReducer from './dialogReducer';
import  sidebarReducer  from './sidebarReducer';

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogReducer,
    sidebar:sidebarReducer
});

let store = createStore(reducers);
window.store = store;

export default store;