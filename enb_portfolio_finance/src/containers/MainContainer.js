import React, { useState, useEffect } from 'react';
import Header from './Header';
import PortfolioList from '../components/PortfolioList';
import PortfolioService from '../services/PortfolioService';
import UsersService from '../services/UsersService';
import ChartBox from '../components/ChartBox';
import MarketBox from '../components/MarketBox';
import WatchList from '../components/WatchList';


const MainContainer = () => {

    const shares_api = process.env.alphavantage_API
    const API_KEY = process.env.REACT_APP_API_KEY

    const [users, setUsers] = useState([])
    const [portfolioShares, setPortfolioShares] = useState([])
    const [stockDaily, setStockDaily] = useState(null)
    const [marketShare, setMarketShare] = useState("")
    const [watchList, setWatchList] = useState([])
    const [stockName, setStockName] = useState("")

    useEffect(() => {
        PortfolioService.getPortfolioShares()
            .then(portfolioShares => setPortfolioShares(portfolioShares))
        UsersService.getUser()
            .then(users => setUsers(users))
    }, []);

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

    const onClick = function (share) {
        setMarketShare(share);
    }

    const addToWl = function () {
        const copyWatchList = [...watchList, marketShare]
        setWatchList(copyWatchList);
    }

    const addShareToPortfolio = (share) => {
        console.log(share)
        PortfolioService.addPortfolioShares(share)
            .then(savedShare => setPortfolioShares([...portfolioShares, savedShare]));
    }

    return (
        <div className="maincontainer">
            <Header users={users} />
            <div className='market-box-watchlist'>
            <MarketBox getStockData={getStockData} stockNameFromSearch={stockNameFromSearch} marketShare={marketShare} addToWl={addToWl} addShareToPortfolio={addShareToPortfolio} />
            <WatchList watchList={watchList} onClick={onClick} />
            </div>
            <PortfolioList portfolioShares={portfolioShares} onClick={onClick}/>
            <ChartBox getStockHistory={getStockHistory} stockDaily={stockDaily} stockName={stockName} setStockName={setStockName} />
        </div>
    )
};

export default MainContainer;