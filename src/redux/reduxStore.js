import {combineReducers, createStore} from "redux";
import profileReducer from './profileReducer';
import dialogReducer from './dialogReducer';
import  sidebarReducer  from './sidebarReducer';
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogReducer,
    sidebar:sidebarReducer,
    usersPage:UsersReducer
});

let store = createStore(reducers);

export default store;