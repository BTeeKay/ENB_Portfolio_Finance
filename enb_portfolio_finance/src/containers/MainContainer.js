import React, {useState, useEffect} from 'react';
import ShareBox from '../components/ShareBox';

const MainContainer = () => {

    const shares_api = process.env.alphavantage_API

    const [searchStock, setSearchStock] = useState("")
    const [stockDaily, setStockDaily] = useState("")
    const [stockIntraDay, setStockIntraDay] = useState("")

    useEffect( () => {
    fetch( `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchStock}&apikey=${shares_api}` )
        .then(res => res.json())
        .then( data => setSearchStock(data))
    fetch( `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockIntraDay}interval=5min&apikey=${shares_api}` )
        .then(res => res.json())
        .then( data => setStockIntraDay(data))
    fetch( `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockDaily}&outputsize=full&apikey=${shares_api}`)
        .then(res => res.json())
        .then( data => setStockDaily(data))
    }, [])


    return (
        <div className="maincontainer">
            <h1>This is main container</h1>
            <ShareBox />
        </div>
    )
};

export default MainContainer;