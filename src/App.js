import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import MyPostsContainer from './components/Profile/MyPosts/MyPostsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


const App = () => {

  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>

          <Route path="/dialogs"
            render={() => <DialogsContainer />} />
          <Route path='/profile/:userId?'
            render={() => <ProfileContainer />} />
          <Route path="/users"
            render={() => <UsersContainer />} />
            <Route path="/login"
            render={() => <Login />} />

        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;
