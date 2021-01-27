import React from "react";
import {tempScale, windScale, rainScale, cloudScale} from "./HashMaps";

function WeatherDetail({weather, region}) {
    return(
        <div >
            <h2>{region.name}</h2>
            <p><b>Description:</b> {weather.description}</p>
            <p>Temp: {tempScale[weather.temp]}</p>
            <p>Wind: {windScale[weather.wind]}</p>
            <p>Rain: {rainScale[weather.rain]}</p>
            <p>Cloud: {cloudScale[weather.cloud]}</p>
        </div>
    );
}

export default WeatherDetail;