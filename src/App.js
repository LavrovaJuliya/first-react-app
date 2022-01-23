import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import News from './components/News/News';


const App = (props) => {
  return (
    <div className='app-wrapper'> 
        <BrowserRouter>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs" element={<Dialogs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div> 
        </BrowserRouter>
    </div>
  );
}


export default App;
