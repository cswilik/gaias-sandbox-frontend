import React from "react";
import {tempScale, windScale, rainScale, cloudScale} from "./HashMaps";

function WeatherDetail({weather, region}) {
    return(
        <div>
            <h2>{region.name.toUpperCase()}</h2>
            <p><b>Description:</b> {weather.description}</p>
            <p><b>Temp:</b> {tempScale[weather.temp]}</p>
            <p><b>Wind:</b> {windScale[weather.wind]}</p>
            <p><b>Rain:</b> {rainScale[weather.rain]}</p>
            <p><b>Cloud:</b> {cloudScale[weather.cloud]}</p>
        </div>
    );
}

export default WeatherDetail;