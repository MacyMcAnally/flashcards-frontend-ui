import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const loc = window.location.pathname;

    const OuterPagesBtnEnable =
        (loc === '/ui') ||
        (loc === '/ui/Login') ||
        (loc === '/ui/NewUser');
    
    const InnerPagesBtnEnable = 
        (loc ==='/ui/UserHome') ||
        (loc ==='/ui/ViewCards') ||
        (loc ==='/ui/CreateCards') ||
        (loc ==='/ui/UserInfo');

    return (
        <header style={headerStyle}>
            <h1>Flashcards!</h1>
                {
                    OuterPagesBtnEnable && (
                        <nav>
                            <NavLink exact to='/ui' activeClassName='selected'>Home</NavLink>
                            <span> </span>
                            <NavLink exact to='/ui/Login' activeClassName='selected'>Login</NavLink>
                            <span> </span>
                            <NavLink exact to='/ui/NewUser' activeClassName='selected'>Create User</NavLink>
                        </nav>
                    )
                }
                {
                    InnerPagesBtnEnable && (
                        <nav>
                            <NavLink exact to='/ui/UserHome' activeClassName='selected'>UserHome</NavLink>
                            <span> </span>
                            <NavLink exact to='/ui/ViewCards' activeClassName='selected'>View Cards</NavLink>
                            <span> </span>
                            <NavLink exact to='/ui/CreateCards' activeClassName='selected'>Create New Cards</NavLink>
                            <span> </span>
                            <NavLink exact to='/ui/UserInfo' activeClassName='selected'>User Info</NavLink>
                        </nav>
                    )
                }

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