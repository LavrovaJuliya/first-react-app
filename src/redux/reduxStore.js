import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from './profileReducer';
import dialogReducer from './dialogReducer';
import  sidebarReducer  from './sidebarReducer';
import UsersReducer from "./UsersReducer";
import authReducer from './auth-reduser';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogReducer,
    sidebar:sidebarReducer,
    usersPage:UsersReducer,
    auth:authReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store = store;

export default store;