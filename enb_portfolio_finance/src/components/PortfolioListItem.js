import React from "react";
import { useContext } from 'react';
import { VisibilityContext } from "react-horizontal-scrolling-menu";

const PortfolioListItem = ({ share }) => {
    // const visibility = useContext(VisibilityContext);


    return (
        <div className="portfolio-share">
            <h2>{share.symbol}</h2>
            <ul>
                <li>Units Held: {share["Units Held"]}</li>
                <li>Bought Price: {share["Purchased Price"]}</li>
                <li>Current Price Goes Here</li>
                <li>Total Value Goes Here</li>
            </ul>
        </div>
    )
};

export default PortfolioListItem;