import React from 'react';
import PortfolioListItem from "./PortfolioListItem";

const PortfolioList = ({ portfolioShares }) => {
    const portfolioNodes = portfolioShares.map(share => {
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