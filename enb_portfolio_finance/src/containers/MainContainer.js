import React, {useState, useEffect} from 'react';
import ShareBox from '../components/ShareBox';
import alphavantage_API from '../.env'

const MainContainer = () => {

    const shares_api = alphavantage_API

    const [search_stock, setSearchStock] = useState("")
    const [stock_daily, setStockDaily] = useState("")
    const [stock_intraday, setStockIntraday] = useState("")

    useEffect( () => {
    fetch( `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search_stock}&apikey=${shares_api}` )
        .then(res => res.json())
        .then( data => setSearchStock(data.results))
    }, [])

    useEffect( () => {
    fetch( `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock_daily}&outputsize=full&ap${shares_api}`)
        .then(res => res.json())
        .then( data => setStockDaily(data.results))
    })

    useEffect(() => {
    fetch( `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stock_intraday}interval=5min&apikey=${shares_api}` )
        .then(res => res.json())
        .then( data => setStockIntraday(data.results))
    })


    return (
        <div className="maincontainer">
            <h1>This is main container</h1>
            <ShareBox />
        </div>
    )
};

export default MainContainer;