import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_3FYOy_AoxGVPQG9pjhdEgbvKLIs7uUP8g&usqp=CAU'></img>
          <div className={s.loginBlock}>
              {props.isAuth ?props.login
           :<NavLink to='./login'>Login</NavLink>}
          </div>

        </header>
    )

}
export default Header;