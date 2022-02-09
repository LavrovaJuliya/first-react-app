import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className = {s.nav}>
        <div className = {s.item}>
          <NavLink to = "/profile" activeclassname = {s.activelink}>Profile</NavLink>
        </div>
        <div className = {s.item}>
          <NavLink to = "/dialogs" activeclassname = {s.activelink}>Messages</NavLink>
        </div>
        <div className = {s.item}>
          <NavLink to = "/users" activeclassname = {s.activelink}>Users</NavLink>
        </div>
        <div className = {s.item}>
          <NavLink to = '/news'>News</NavLink>
        </div>
        <div className = {s.item}>
          <NavLink to = "/music">Music</NavLink>
        </div>
        <div className = {s.item}>
          <NavLink to = "/settings">Settinsgs</NavLink>
        </div>
      </nav>
    )

}
export default Navbar;