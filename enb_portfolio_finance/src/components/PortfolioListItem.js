import React, { useEffect, useState } from "react";


const PortfolioListItem = ({ share, onClick, }) => {


    const API_KEY = process.env.REACT_APP_API_KEY

    const [currentPrice, setCurrentPrice] = useState("");

    fetch(`https://cloud.iexapis.com/stable/stock/${share.symbol}/quote?token=${API_KEY}`)
        .then(result => result.json())
        .then(price => setCurrentPrice(price["latestPrice"]))
    share.currentPrice = currentPrice

    const totalBoughtValue = share["Units Held"] * share.latestPrice;

    const totalCurrentPrice = share["Units Held"] * share.currentPrice;


    const handleClick = () => {
        onClick(share)
    }

    if (totalCurrentPrice >= totalBoughtValue) {
        return (
            <div className="portfolio-share">
                <h2 onClick={handleClick}>{share.symbol}</h2>
                <ul>
                    <li>Units Held: {share["Units Held"]}</li>
                    <li>Bought Price: {share.latestPrice}</li>
                    <li>Current Price: {share.currentPrice}</li>
                    <li >Total Price When Bought: {totalBoughtValue}</li>
                    <div className="green">
                        <li>Total Current Price: {totalCurrentPrice}</li>
                    </div>
                </ul>
            </div>

        )
    }


    return (
        <div className="portfolio-share">
            <h2 onClick={handleClick}>{share.symbol}</h2>
            <ul>
                <li>Units Held: {share["Units Held"]}</li>
                <li>Bought Price: {share.latestPrice}</li>
                <li>Current Price: {share.currentPrice}</li>
                <li>Total Price When Bought: {totalBoughtValue}</li>
                <div className="red">
                    <li>Total Current Price: {totalCurrentPrice}</li>
                </div>
            </ul>
        </div>
    )
};

export default PortfolioListItem;