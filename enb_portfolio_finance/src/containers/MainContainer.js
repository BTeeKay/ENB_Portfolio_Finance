import React, {useState, useEffect} from 'react';
import ShareBox from '../components/ShareBox';
import PortfolioList from '../components/PortfolioList';

const MainContainer = () => {

    const shares_api = process.env.alphavantage_API
    const API_KEY = process.env.REACT_APP_API_KEY

    const [searchStock, setSearchStock] = useState("")
    const [stockDaily, setStockDaily] = useState("")
    const [stockIntraDay, setStockIntraDay] = useState("")

    // useEffect( () => {

    // // fetch( `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockDaily}&outputsize=full&apikey=${shares_api}`)
    // //     .then(res => res.json())
    // //     .then( data => setStockDaily(data))
    // // fetch(`https://cloud.iexapis.com/stable/stock/${stock}/quote?token=${API_KEY}`)
    // //     .then(result => result.json())
    // //     .then(stocks => getStocks(stocks))
    // // }, [])


    return (
        <div className="maincontainer">
            <h1>This is main container</h1>
            <ShareBox />
        </div>
    )
};

export default MainContainer;