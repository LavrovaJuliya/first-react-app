import React from "react";
import { connect } from 'react-redux';
import { followAC, unfollowAC } from "../../redux/UsersReducer";
import Users from './Users';
import { setUsersAC } from './../../redux/UsersReducer';


        
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }

}
   

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;