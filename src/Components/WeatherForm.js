import React, {useState} from 'react';

function WeatherForm({region, weather, onWeatherFormSubmit, onSetPosition, onDelete}) {
    const [description, setDescription] = useState(weather.description)
    const [temp, setTemp] = useState(weather.temp)
    const [rain, setRain] = useState(weather.rain)
    const [cloud, setCloud] = useState(weather.cloud)
    const [wind, setWind] = useState(weather.wind)

    const formData = {
        id: weather.id,
        description: description,
        temp: temp,
        rain: rain,
        cloud: cloud,
        wind: wind
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch(`${process.env.REACT_APP_API_BASE_URL}/weathers/${weather.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then(resp => resp.json())
        .then(data => {
            onSetPosition([region.centerLat, region.centerLong])
            onWeatherFormSubmit(data)})
    }

    function handleDelete() {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/weathers/${weather.id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            }
        }).then(resp => resp.json())
            .then(onDelete(weather.id))
    }
   
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>CONTROL THE WEATHER</label>
            <br></br>
            <input type="text" value={description} placeholder={weather.description} onChange={(evt) => {setDescription(evt.target.value)}}></input>
            <br></br>
            <select id="temp" name="temp" value={temp} onChange={(evt) => {setTemp(evt.target.value)}}>
                <option value="1">artic cold</option>
                <option value="2">below feezing</option>
                <option value="3">cold</option>
                <option value="4">warm</option>
                <option value="5">hot</option>
                <option value="6">scorching</option>
            </select>
            <br></br>
            <select id="rain" name="rain" value={rain} onChange={(evt) => {setRain(evt.target.value)}}>
                <option value="1">No Rain</option>
                <option value="2">Misty</option>
                <option value="3">Rainy</option>
                <option value="4">Torrential downpour</option>
                <option value="5">Light snow</option>
                <option value="6">Blizzard</option>
            </select>
            <br></br>
            <select id="cloud" name="cloud" value={cloud} onChange={(evt) => {setCloud(evt.target.value)}}>
                <option value="1">clear skies</option>
                <option value="2">partly cloudly</option>
                <option value="3">full coverage</option>
                <option value="4">oncoming storm</option>
                <option value="5">overcast</option>
                <option value="6">blots out the sky</option>
            </select>
            <br></br>
            <select id="wind" name="wind" value={wind} onChange={(evt) => {setWind(evt.target.value)}}>
                <option value="1">no wind</option>
                <option value="2">light breeze</option>
                <option value="3">windy</option>
                <option value="4">stormy</option>
                <option value="5">heavy gale</option>
                <option value="6">hurricane</option>
            </select>
            <br></br>
            <button type="submit">Submit</button>
        </form>
        <br></br>
        <button onClick={handleDelete}>Apocalypse Now!!!!</button>
        </>
    );

}

export default WeatherForm;