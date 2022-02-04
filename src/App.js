import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import MyPostsContainer from './components/Profile/MyPosts/MyPostsContainer';



const App = (props) => {
 
  return (
    <div className='app-wrapper'> 
        <BrowserRouter>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs"
             element ={ <DialogsContainer />} />
            <Route path="/profile"
             element ={ <Profile />}  />
           
          </Routes>
        </div> 
        </BrowserRouter>
    </div>
  );
}


export default App;
