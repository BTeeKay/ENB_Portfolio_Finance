import React from 'react';

const MarketDetail = ({stock}) => {
    
    

    return (
        <>
        <div class="stock detail">
            <h2>{stock["companyName"]}</h2>
            <p>{stock["symbol"]}</p>
            <ul>
                <li>Currency: {stock["currency"]}</li>
                <li>Current Price: {stock["latestPrice"]}</li>
                <li>High: {stock["high"]}</li>
                <li>Low: {stock["low"]}
                <h6>{stock["lowSource"]}</h6>
                </li>
                <li>Open: {stock["open"]}</li>
            </ul>
            <p>
                Primary Exchange: {stock.primaryExchange}
            </p>
        </div>
        </>
    )
}

export default MarketDetail;

