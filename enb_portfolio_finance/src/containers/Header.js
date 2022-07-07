import React from 'react';
import './header.css';

const Header = ({ users, totalValue }) => {
    return (
    <div>
    <header>
        <h1>E.N.B Portfolio Finance</h1>
    
        {users.map((user) => {
        return (
            <>
            <h2>Welcome {user.name}</h2>
            <h3>Balance: {user.cash}</h3>
            <h4>Total Value: {totalValue}</h4>
            </>
        )
        })}
        </header>
    </div>  
    )
}


export default Header;