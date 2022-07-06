import React from 'react';
import ChartItem from './ChartItem';

const ChartBox = ({getStockHistory, stockDaily, setStockName, stockName}) => {


    const handleChange = (event) => {
        const inputText = event.target.value
        if (inputText.length === 3 || inputText.length === 4) {
            getStockHistory(inputText)
            setStockName(inputText)
        };
    }

    return (
        <div className="chartbox">
            <h3>This is ChartBox</h3>
            <form>
                <input  maxLength="4" className="textboxinput"
                onChange={handleChange} placeholder="Enter 4 character symbol"
                type="text"></input>
            </form>
            <ChartItem stockDaily={stockDaily} stock={stockName}/>
        </div>
    )
};

export default ChartBox;