import React from "react";

function WeatherDetail({weather}) {
    const tempScale = {
        1: "artic cold",
        2: "below feezing",
        3: "cold",
        4: "warm",
        5: "hot",
        6: "scorching"
    }

    const windScale = {
        1: "no wind",
        2: "light breeze",
        3: "windy",
        4: "stormy",
        5: "heavy gale",
        6: "hurricane"
    }

    const rainScale = {
        1: "no rain",
        2: "misty",
        3: "light drizzle",
        4: "rainy",
        5: "heavy rain",
        6: "torrential downpour"
    }

    const cloudScale = {
        1: "clear skies",
        2: "partly cloudly",
        3: "full coverage",
        4: "oncoming storm",
        5: "overcast",
        6: "blots out the sky"
    }
    console.log(weather.description)

    return(
        <div className="modal-content">
            <p>desc: {weather.description}</p>
            <p>temp: {tempScale[weather.temp]}</p>
            <p>wind: {windScale[weather.wind]}</p>
            <p>rain: {rainScale[weather.rain]}</p>
            <p>cloud: {cloudScale[weather.cloud]}</p>
        </div>
    );
}

export default WeatherDetail;