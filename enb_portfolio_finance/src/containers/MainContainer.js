import React, { useState, useEffect } from 'react';
import Header from './Header';
import PortfolioList from '../components/PortfolioList';
import PortfolioService from '../services/PortfolioService';
import UsersService from '../services/UsersService';
import ChartBox from '../components/ChartBox';
import MarketBox from '../components/MarketBox';
import WatchList from '../components/WatchList';
import './maincontainer.css'


const MainContainer = () => {

    const shares_api = process.env.alphavantage_API
    const API_KEY = process.env.REACT_APP_API_KEY

    const [users, setUsers] = useState([])
    const [portfolioShares, setPortfolioShares] = useState([])
    const [stockDaily, setStockDaily] = useState(null)
    const [marketShare, setMarketShare] = useState("")
    const [watchList, setWatchList] = useState([])
    const [stockName, setStockName] = useState("")
    const [totalValue, setTotalValue] = useState(null)

    useEffect(() => {
        PortfolioService.getPortfolioShares()
            .then(portfolioShares => setPortfolioShares(portfolioShares))
        UsersService.getUser()
            .then(users => setUsers(users));
            getTotalValue();
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

    const addToWatchList = function () {
        const copyWatchList = [...watchList, marketShare]
        setWatchList(copyWatchList);
    }

    const addShareToPortfolio = (share) => {
        
        marketShare['Units Held'] = 5;
        let totes = 0;
        totes = marketShare['Units Held'] * parseFloat(marketShare['latestPrice']);
        console.log(totes)
        console.log(users[0].cash)
        if (users[0].cash > totes) {
            
            const copyPortfoliList = [...portfolioShares, marketShare]
            setPortfolioShares(copyPortfoliList);
            PortfolioService.addPortfolioShares(marketShare)
            getTotalValue()
        };
    }

    const getTotalValue =  () => {
        let total = 0
        portfolioShares.map(share => {
                total += (share.currentPrice * share["Units Held"])
                console.log(share.currentPrice)
                console.log(total)
            })
        setTotalValue(total)
        }

    return (
        <div className="maincontainer">
            <h1>PLEASE LET THIS SHOW TOTAL {totalValue}</h1>
            <Header users={users} />
            <div className='market-box-watchlist'>
                <MarketBox getStockData={getStockData} stockNameFromSearch={stockNameFromSearch} marketShare={marketShare} addToWatchList={addToWatchList} addShareToPortfolio={addShareToPortfolio} />
                <WatchList watchList={watchList} onClick={onClick} />
            </div>
            <PortfolioList portfolioShares={portfolioShares} onClick={onClick} />
            <ChartBox getStockHistory={getStockHistory} stockDaily={stockDaily} stockName={stockName} setStockName={setStockName} />
        </div>
    )
};

export default MainContainer;