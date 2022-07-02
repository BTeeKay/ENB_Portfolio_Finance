import React from "react";

const PortfolioListItem = ({ share }) => {



    return (
        <div className="portfolio-share">
            <h2>{share["Meta Data"]["2. Symbol"]}</h2>
            <ul>
                <li>{share["Meta Data"]["8. Units Held"]}</li>
                <li>Current Price Goes Here</li>
                <li>Total Value Goes Here</li>
            </ul>
        </div>
    )
}