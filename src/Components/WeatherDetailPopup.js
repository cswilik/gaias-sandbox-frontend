import React from "react";
import WeatherDetail from "./WeatherDetail";

function WeatherDetailPopup({allWeathers}){
    return(
        <div>
            <p>POPUP</p>
            <WeatherDetail/>
        </div>
    );
}

export default WeatherDetailPopup;