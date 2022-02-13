const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  posts: [
    { id: 1, message: 'How are you?', likesCount: 15 },
    { id: 2, message: 'It is myfirst post', likesCount: 20 },
    { id: 3, message: 'It is second post', likesCount: 20 },
    { id: 4, message: 'It is thirst post', likesCount: 20 },

  ],
  newPostText: 'it-kamasutra.com',
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
    return {
        ...state, 
        posts:[...state.posts,newPost],
        newPostText:''
      };
    
    }
    case UPDATE_NEW_POST_TEXT: {
      return{
        ...state,
        newPostText:action.newText
      };
    }
    case SET_USER_PROFILE: {
      return{...state,profile:action.profile};
    }

    default: return state;
  }
}
export const addPostActionCreator = () => {
  return ({
    type: ADD_POST

  }
  )
}
export const updateNewPostTextActionCreator = (text) => {
  return ({
    type: UPDATE_NEW_POST_TEXT, newText: text

  }
  )
}
export const setUserProfile = (profile) => {
  return ({
    type: SET_USER_PROFILE, profile:profile

  })
  
}



export default profileReducer;