import React from 'react';
import PortfolioListItem from "./PortfolioListItem";

const PortfolioList = ({ portfolio_shares }) => {
    const portfolioNodes = portfolio_shares.map(share => {
        return <PortfolioListItem
            key={share._id}
            share={share}
        />
    });

    return (
        <div className='portfolio'>
            <h3>Portfolio</h3>
            {portfolioNodes}
        </div>
    )
};

export default PortfolioList;