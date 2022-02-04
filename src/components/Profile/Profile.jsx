import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { addPost } from './../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer />

    </div>
  )  

}
export default Profile;