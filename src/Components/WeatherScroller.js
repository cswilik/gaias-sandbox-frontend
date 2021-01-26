import React from "react";

function WeatherScroller({allWeathers, regions}) {

    let tickerItems = regions.map(region => {
        // const weather = allWeathers.find((weather) => {
        //     console.lop(weather.region.id)
        //     return weather.region.id === region.id
        // })

        return(
            <div className="ticker-item" key={region.id}><b>{region.name}</b>: {region.weathers[0]}</div>
        );
    })

    return(
        <div>
            <div className="tcontainer"><div className="ticker-wrap"><div className="ticker-move">
                {tickerItems}
            </div></div></div>
        </div>
    );
}

export default WeatherScroller;