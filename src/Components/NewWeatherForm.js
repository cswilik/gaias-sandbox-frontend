import React, {useState} from "react"
import {tempScale, rainScale, cloudScale, windScale} from "./HashMaps";

function NewWeatherForm({region, currentUser, onNewWeather, onSetPosition}) {
    const [description, setDescription] = useState("")
    const [temp, setTemp] = useState(1)
    const [rain, setRain] = useState(1)
    const [cloud, setCloud] = useState(1)
    const [wind, setWind] = useState(1)

    const newWeather = {
        description: description,
        temp: temp,
        rain: rain,
        cloud: cloud,
        wind: wind,
        region_id: region.id,
        user_id: currentUser.id
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch(`${process.env.REACT_APP_API_BASE_URL}/weathers`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newWeather),
        }).then(r => r.json())
        .then(data => {
            onSetPosition([region.centerLat, region.centerLong])
            onNewWeather(data)
        })
    }
    
    return (  
        <form className="weather-form" onSubmit={handleSubmit}>
            <label><h2>CREATE A WEATHER</h2></label>
            <label><b>Description:</b></label> 
            <input type="text" value={description} placeholder="describe the conditions" onChange={(evt) => {setDescription(evt.target.value)}}></input>
            <br></br>
            <label><b>Temp:</b></label>
            <select id="temp" name="temp" value={temp} onChange={(evt) => {setTemp(evt.target.value)}}>
    a           <option value="1">{tempScale[1]}</option>
                <option value="2">{tempScale[2]}</option>
                <option value="3">{tempScale[3]}</option>
                <option value="4">{tempScale[4]}</option>
                <option value="5">{tempScale[5]}</option>
                <option value="6">{tempScale[6]}</option>
            </select>
            <br></br>
            <label><b>Rain:</b></label> 
            <select id="rain" name="rain" value={rain} onChange={(evt) => {setRain(evt.target.value)}}>
                <option value="1">{rainScale[1]}</option>
                <option value="2">{rainScale[2]}</option>
                <option value="3">{rainScale[3]}</option>
                <option value="4">{rainScale[4]}</option>
                <option value="5">{rainScale[5]}</option>
                <option value="6">{rainScale[6]}</option>
            </select>
            <br></br>
            <label><b>Cloud:</b></label> 
            <select id="cloud" name="cloud" value={cloud} onChange={(evt) => {setCloud(evt.target.value)}}>
            <option value="1">{cloudScale[1]}</option>
                <option value="2">{cloudScale[2]}</option>
                <option value="3">{cloudScale[3]}</option>
                <option value="4">{cloudScale[4]}</option>
                <option value="5">{cloudScale[5]}</option>
                <option value="6">{cloudScale[6]}</option>
            </select>
            <br></br>
            <label><b>Wind:</b></label> 
            <select id="wind" name="wind" value={wind} onChange={(evt) => {setWind(evt.target.value)}}>
            <option value="1">{windScale[1]}</option>
                <option value="2">{windScale[2]}</option>
                <option value="3">{windScale[3]}</option>
                <option value="4">{windScale[4]}</option>
                <option value="5">{windScale[5]}</option>
                <option value="6">{windScale[6]}</option>
            </select>
            <br></br>
            <button className="btn-submit" type="submit">Submit</button>
        </form>
    )
}

export default NewWeatherForm;