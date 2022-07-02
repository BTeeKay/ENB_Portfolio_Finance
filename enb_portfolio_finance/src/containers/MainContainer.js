import React, { useState, useEffect } from 'react';
import ShareBox from '../components/ShareBox';
import PortfolioList from '../components/PortfolioList';
import PortfolioService from '../services/PortfolioService';
import MarketBox from '../components/MarketBox';

const MainContainer = () => {

    const shares_api = process.env.alphavantage_API
    const API_KEY = process.env.REACT_APP_API_KEY

    const [stockDaily, setStockDaily] = useState("")
    const [marketShare, getMarketShare] = useState("")
    const [portfolioShares, setPortfolioShares] = useState([])

    // const getStockHistory = () => {
    //     fetch( `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock}&outputsize=full&apikey=${shares_api}`)
    //     .then(res => res.json())
    //     .then( stockDaily => setStockDaily(stockDaily))
    // }

    const stockNameFromSearch = (s) => {
        getMarketShare(s);
    };

    const getStockData =(stock) => {
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
            {/* getStockHistory={getStockHistory} */}
            <ShareBox/>
            <MarketBox getStockData={getStockData} stockNameFromSearch={stockNameFromSearch} marketShare={marketShare}/>
            <PortfolioList portfolioShares={portfolioShares} />
        </div>
    )
};

export default MainContainer;