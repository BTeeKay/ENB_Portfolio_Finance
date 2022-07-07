import React, { useEffect, useState } from "react";


const PortfolioListItem = ({ share, onClick, sellPortfolioShare }) => {


    const API_KEY = process.env.IEX_API_KEY

    const [currentPrice, setCurrentPrice] = useState("");

    fetch(`https://cloud.iexapis.com/stable/stock/${share.symbol}/quote?token=pk_51315487dc164686a2a06dfa86408424`)
        .then(result => result.json())
        .then(price => setCurrentPrice(price["latestPrice"]))
    share.currentPrice = currentPrice

    const totalBoughtValue = share["Units Held"] * share.latestPrice;

    const totalCurrentPrice = share["Units Held"] * share.currentPrice;

    const boughtValue = parseFloat(totalBoughtValue).toFixed(2);
    const currentValue = parseFloat(totalCurrentPrice).toFixed(2);

    const handleClick = () => {
        onClick(share)
    }

    const handleDeleteClick = () => {
        sellPortfolioShare(share._id)

    }


    if (totalCurrentPrice >= totalBoughtValue) {
        return (
            <div className="portfolio-share">
                <h2 onClick={handleClick}>{share.symbol}</h2>
                <ul>
                    <li>Units Held: {share["Units Held"]}</li>
                    <li>Bought Price: {share.latestPrice}</li>
                    <li>Current Price: {share.currentPrice}</li>
                    <li >Total Price When Bought: {boughtValue}</li>
                    <div className="green">
                        <li>Total Current Price: {currentValue}</li>
                    </div>
                </ul>
                <button
                type="button"
                className="delete-btn"
                onClick={handleDeleteClick}
            >Sell All
            </button>
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
                <li>Total Price When Bought: {boughtValue}</li>
                <div className="red">
                    <li>Total Current Price: {currentValue}</li>
                </div>
            </ul>
            <button
                type="button"
                className="delete-btn"
                onClick={handleDeleteClick}
            >Sell All
            </button>
        </div>
    )
};

export default PortfolioListItem;