import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return (

    <div>
      <textarea></textarea>
      <button>Add post</button>
      <button>Post remove</button>
      <div>
        New post
      </div>
      <div className={s.posts}>
        <Post  message = 'Hi,how are you?' likesCount = '15' />
        <Post message = 'It is myfirst post' likesCount = '20' />
      </div>

    </div>


  )

}
export default MyPosts;