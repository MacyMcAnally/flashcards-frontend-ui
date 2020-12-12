import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>Flashcards!</h1>
        <ul>
            <li>
            <NavLink exact to='/' activeClassName='selected'>Home</NavLink>
            </li>
            <li>
            <NavLink exact to='/Login' activeClassName='selected'>Login</NavLink>
            </li>
            <li>
            <NavLink exact to='/NewUser' activeClassName='selected'>Create User</NavLink>
            </li>
        </ul>
        </header>
    )
}

const headerStyle = {
    display: 'flex',
    background: '#E0FFFF',
    color: '#2F4F4F',
    textAlign: 'left',
    padding: '3px 15px'
}

export default Header;