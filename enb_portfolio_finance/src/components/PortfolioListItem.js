import React from "react";
import { useContext } from 'react';
import { VisibilityContext } from "react-horizontal-scrolling-menu";

const PortfolioListItem = ({ share, onClick }) => {

    const totalValue = share["Units Held"] * share.latestPrice;

    const handleClick = () => {
        onClick(share)
    }

    return (
        <div className="portfolio-share">
            <h2 onClick={handleClick}>{share.symbol}</h2>
            <ul>
                <li>Units Held: {share["Units Held"]}</li>
                <li>Bought Price: {share.latestPrice}</li>
                <li>Current Price Goes Here</li>
                <li>$ {totalValue}</li>
            </ul>
        </div>
    )
};

export default PortfolioListItem;