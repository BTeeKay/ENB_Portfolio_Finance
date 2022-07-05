import React from 'react';
import './header.css';

const Header = ({ user }) => {

    console.log(user)
    return (
        <header>
            <h1>E.N.B Portfolio Finance</h1>
            <h2>Welcome {user.name}</h2>
            <h2>Balance: {user.cash} </h2>
        </header>
    )
}

export default Header;