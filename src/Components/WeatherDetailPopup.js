import React from "react";
import WeatherDetail from "./WeatherDetail";

function WeatherDetailPopup({allWeathers, selectedRegion}){
    console.log(selectedRegion)
    const weather = allWeathers.filter((weather) => weather.region.id === selectedRegion)[0]
    console.log(weather)
    return(
        <div>
            <WeatherDetail weather={weather} />
        </div>
    );
}

export default WeatherDetailPopup;