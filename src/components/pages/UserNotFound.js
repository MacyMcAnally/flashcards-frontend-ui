import React from 'react'
import {  NavLink } from "react-router-dom";
import Header from '../Header';

function UserNotFound() {
    return (
        <>
            <Header />
        <div>
            <p>404 User not found, please try again or create a new user</p>
            <NavLink exact to='/ui/Login' activeClassName='selected'>Login</NavLink>
            <span> / </span>
            <NavLink exact to='/ui/NewUser' activeClassName='selected'>Create New User</NavLink>
        </div>
        </>
    )
}


export default UserNotFound;