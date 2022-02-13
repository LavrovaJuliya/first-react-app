import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import MyPostsContainer from './components/Profile/MyPosts/MyPostsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App = (props) => {
 
  return (
    <div className='app-wrapper'> 
        <BrowserRouter>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
        
            <Route path="/dialogs"
             element ={ <DialogsContainer />} />
            <Route path="/profile/2"
             render = {()=><ProfileContainer />}  />
             <Route path="/users"
             element ={<UsersContainer /> }  />

         
        </div> 
        </BrowserRouter>
    </div>
  );
}


export default App;
