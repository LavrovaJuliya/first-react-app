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
import { addPost } from './redux/state';



const App = (props) => {
 
  return (
    <div className='app-wrapper'> 
        <BrowserRouter>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs"
             element ={ <Dialogs 
              state={props.state.dialogsPage} />} />
            <Route path="/profile"
             element ={ <Profile profilePage ={props.state.profilePage}
                                 addPost = {props.addPost}
                                 updateNewPostText = {props.updateNewPostText} />}  />
           
          </Routes>
        </div> 
        </BrowserRouter>
    </div>
  );
}


export default App;
