import React from "react";
import WeatherDetail from "./WeatherDetail";

function WeatherScroller({user, allWeathers}){
    return(
        <div>
            <p>SCROLLER</p>
            <WeatherDetail />
        </div>
    );
}

export default WeatherScroller;