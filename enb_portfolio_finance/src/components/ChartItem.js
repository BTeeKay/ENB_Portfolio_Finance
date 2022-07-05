import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const ChartItem = ({ stockDaily, stock }) => {

    let options;

    if (stockDaily) {

        var data = []

        for (i in stockDaily) {
            stockDaily[i]["0. date"] = (new Date(i).getTime())
        };

        for (var i in stockDaily)
            data.push(stockDaily[i]);

        var ohlc = [];
        var dataLength = data.length;
        var i = 0;

        for (i; i < dataLength; i += 1) {
            ohlc.push([
                data[i]['0. date'],
                parseFloat(data[i]["4. close"])
            ]);

            ohlc.sort(function (a, b) { return a[0] - b[0] });
        }

        options = {
            rangeSelector: {
                selected: 1
            },

            title: {
                text: `${stock} Stock Price`
            },

            series: [{
                name: stock,
                data: ohlc,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        };
    }


    console.log(ohlc);

    return (
        <div className="chart_item">
            <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={options}
            />
        </div>
    )
}

export default ChartItem;