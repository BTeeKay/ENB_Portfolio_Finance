import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const ChartItem = ({stockDaily}) => {

    let options;

    if (stockDaily) {

        var data = []

        for (i in stockDaily) {
            stockDaily[i]["0. date"] = (new Date(i).getTime())
        };
        
        for(var i in stockDaily)
            data.push(stockDaily[i]);

        console.log(data);
        var ohlc = [];
        var volume = [];
        var dataLength = data.length;
        var i = 0;
        console.log(dataLength)

    for (i; i < dataLength; i += 1) {
        ohlc.push([
            data[i]['0. date'],
            parseFloat(data[i]["1. open"]),
            parseFloat(data[i]["2. high"]),
            parseFloat(data[i]["3. low"]),
            parseFloat(data[i]["4. close"])
        ]);

        volume.push([
            data[i]['0. date'],
            parseFloat(data[i]['5. volume'])
        ]);
    }

        options = {
            title: {
              text: 'Hopefully this has info'
            },
            series: [
              {
                data: ohlc
              }
            ]
          };
    }
    else {
        options = {
            title: {
              text: 'This doesnt have info'
            },
            series: [
              {
                data: [1,2,3,4,5,6]
              }
            ]
          };
    }

    return (
        <div className="sharebox">
            <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={options}
            />
        </div>
    )
}

export default ChartItem;