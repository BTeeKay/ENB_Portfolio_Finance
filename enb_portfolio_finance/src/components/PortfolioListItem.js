import React from "react";
import { useContext } from 'react';
import { VisibilityContext } from "react-horizontal-scrolling-menu";

const PortfolioListItem = ({ share }) => {

    const totalValue = share["Units Held"] * share["Purchased Price"];


    return (
        <div className="portfolio_share">
            <h2>{share.symbol}</h2>
            <ul>
                <li>Units Held: {share["Units Held"]}</li>
                <li>Bought Price: {share["Purchased Price"]}</li>
                <li>Current Price Goes Here</li>
                <li>$ {totalValue}</li>
            </ul>
        </div>
    )
};

export default PortfolioListItem;