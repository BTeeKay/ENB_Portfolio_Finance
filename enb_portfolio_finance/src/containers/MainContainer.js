import React, { useState, useEffect } from 'react';
import PortfolioList from '../components/PortfolioList';
import PortfolioService from '../services/PortfolioService';
import ChartBox from '../components/ChartBox';
import MarketBox from '../components/MarketBox';
import WatchList from '../components/WatchList';

const MainContainer = () => {

    const shares_api = process.env.alphavantage_API
    const API_KEY = process.env.REACT_APP_API_KEY


    const [stockDaily, setStockDaily] = useState(null)
    const [marketShare, setMarketShare] = useState("")
    const [portfolioShares, setPortfolioShares] = useState([])
    const [watchList, setWatchList] = useState([])


    const getStockHistory = (stock) => {
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock}&outputsize=compact&apikey=${shares_api}`)
            .then(res => res.json())
            .then(stockDaily => setStockDaily(stockDaily['Time Series (Daily)']))
    }

    const stockNameFromSearch = (s) => {
        setMarketShare(s);
    };

    const getStockData = (stock) => {
        fetch(`https://cloud.iexapis.com/stable/stock/${stock}/quote?token=${API_KEY}`)
            .then(result => result.json())
            .then(marketShare => setMarketShare(marketShare))
    }


    useEffect(() => {
        PortfolioService.getPortfolioShares()
            .then(portfolioShares => setPortfolioShares(portfolioShares))
    }, []);

    const onWlClick = function(share){
        setMarketShare(share);
    }

    const addToWl = function(){
        const copyWatchList = [...watchList, marketShare]
        setWatchList(copyWatchList);
    }

    const addShareToPortfolio = (share) => {
        PortfolioService.addPortfolioShares(share)
            .then(savedShare => setPortfolioShares([...portfolioShares, savedShare]));
    }




    return (
        <div className="maincontainer">
            <h1>This is main container</h1>
            {/* getStockHistory={getStockHistory} */}
            <MarketBox getStockData={getStockData} stockNameFromSearch={stockNameFromSearch} marketShare={marketShare} addToWl={addToWl} addShareToPortfolio={addShareToPortfolio} />
            <WatchList watchList={watchList} onWlClick={onWlClick} />
            <PortfolioList portfolioShares={portfolioShares} />
            <ChartBox getStockHistory={getStockHistory} stockDaily={stockDaily} />
        </div>
    )
};

export default MainContainer;