import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const loc = window.location.pathname;

    const OuterPagesBtnEnable =
        (loc === '/ui') || (loc === '/ui/') ||
        (loc === '/ui/Login') || (loc === '/ui/Login/') ||
        (loc === '/ui/NewUser') || (loc === '/ui/NewUser/');

    const InnerPagesBtnEnable =
        (loc === '/ui/UserHome') || (loc === '/ui/UserHome/') ||
        (loc === '/ui/ViewCards') || (loc === '/ui/ViewCards/') ||
        (loc === '/ui/CreateTemp') || (loc === '/ui/CreateTemp/') ||
        (loc === '/ui/CreateCards') || (loc === '/ui/CreateCards/');


return (
        <header style={headerStyle}>
                <h1 >Flashcards!</h1>
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
                            <NavLink exact to='/ui/CreateTemp' activeClassName='selected'>Create Template</NavLink>
                            <span> </span>
                            <NavLink exact to='/ui/CreateCards' activeClassName='selected'>Create New Cards</NavLink>
                        </nav>
                    )
                    }
        </header>
    )
}

const headerStyle = {
    display: 'block',
    background: '#E0FFFF',
    color: '#2F4F4F',
    textAlign: 'center',
    padding: '10px 10px ',
    fontFamily: 'serif',
    fontWeight: '100',
    fontStyle: 'oblique',
    fontSize: '20px',
    

}


export default Header;