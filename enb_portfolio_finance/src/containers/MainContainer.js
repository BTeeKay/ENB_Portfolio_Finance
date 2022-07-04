import React, { useState, useEffect } from 'react';
import PortfolioList from '../components/PortfolioList';
import PortfolioService from '../services/PortfolioService';
import ChartBox from '../components/ChartBox';
import MarketBox from '../components/MarketBox';

const MainContainer = () => {

    const shares_api = process.env.alphavantage_API
    const API_KEY = process.env.REACT_APP_API_KEY

    const [stockDaily, setStockDaily] = useState(null)
    const [marketShare, getMarketShare] = useState("")
    const [portfolioShares, setPortfolioShares] = useState([])


    const getStockHistory = (stock) => {
        fetch( `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock}&outputsize=compact&apikey=${shares_api}`)
        .then(res => res.json())
        .then( stockDaily => setStockDaily(stockDaily['Time Series (Daily)']))
    }

    const stockNameFromSearch = (s) => {
        getMarketShare(s);
    };

    const getStockData = (stock) => {
        fetch(`https://cloud.iexapis.com/stable/stock/${stock}/quote?token=${API_KEY}`)
        .then(result => result.json())
        .then(marketShare => getMarketShare(marketShare))
    }


    useEffect(() => {
        PortfolioService.getPortfolioShares()
            .then(portfolioShares => setPortfolioShares(portfolioShares))
    }, []);


    return (
        <div className="maincontainer">
            <h1>This is main container</h1>
            <MarketBox getStockData={getStockData} stockNameFromSearch={stockNameFromSearch} marketShare={marketShare}/>
            <PortfolioList portfolioShares={portfolioShares} />
            <ChartBox getStockHistory={getStockHistory} stockDaily={stockDaily}/>
        </div>
    )
};

export default MainContainer;