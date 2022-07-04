import React from 'react';
import MarketDetail from './MarketDetail';

const MarketBox = ({marketShare, stockNameFromSearch, getStockData, addToWl}) => {

    const handleChange = (event) => {
        const inputText = event.target.value
        if (inputText.length === 4) {
            stockNameFromSearch(inputText)
            getStockData(inputText)
        }
    }

    return (
        <>
        <h2> Market Shares</h2>
        <div>
            <h4>Search a stock</h4>
            <form>
                <input maxLength="4" className="searchShares"
                onChange={handleChange} placeholder="Enter stock symbol"
                type="text"></input>
            </form>
        </div>
        <MarketDetail stock={marketShare} addToWl={addToWl}/>
        </>

    )
}

export default MarketBox;