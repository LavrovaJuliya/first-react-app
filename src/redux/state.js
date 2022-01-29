
import { renderedEntireTree } from './../render';
let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'How are you?', likesCount: 15 },
      { id: 2, message: 'It is myfirst post', likesCount: 20 },
      { id: 3, message: 'It is second post', likesCount: 20 },
      { id: 4, message: 'It is thirst post', likesCount: 20 },

    ],
    newPostText:'it-kamasutra.com'
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
    ]
  }
}

 export let addPost =() =>{
  let newPost= {
    id:5,
    message:state.profilePage.newPostText,
    likesCount:0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderedEntireTree(state);
}
export let updateNewPostText =(newText) =>{
 
  state.profilePage.newPostText = newText;
  renderedEntireTree(state);

}










export default state;