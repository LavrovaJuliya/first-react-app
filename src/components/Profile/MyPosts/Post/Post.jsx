import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqhF5q33PEoDbdA1ZLk0WilL68QTRa1RUI0w&usqp=CAU'></img>
      {props.message}
      <div>
        <span>Like</span>
        {props.likesCount}
      </div>
    </div>
  ); 

}
export default Post;