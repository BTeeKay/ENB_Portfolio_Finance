import React, { useState, useContext } from 'react';
import PortfolioListItem from "./PortfolioListItem";


const PortfolioList = ({ portfolioShares, onClick, sellPortfolioShare}) => {

    const portfolioNodes = portfolioShares.map(share => {
        return <PortfolioListItem 
            onClick={onClick} 
            itemId={share._id}
            key={share._id}
            share={share}
            sellPortfolioShare={sellPortfolioShare}
        />
    });

    return (
        <div className='portfolio'>
            <h2>Portfolio</h2>
            <div className='scrollmenu'>
                {portfolioNodes}
            </div>
        </div>
    )
};

export default PortfolioList;