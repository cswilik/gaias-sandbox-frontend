import React, {useState} from "react"

function NewWeatherForm({region, currentUser, onNewWeather}) {
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
            console.log(data)
            onNewWeather(data)
        })
    }
    
    return (  
        <form onSubmit={handleSubmit}>
            <label>CREATE A WEATHER</label>
            <br></br>
            <input type="text" value={description} placeholder="describe the conditions" onChange={(evt) => {setDescription(evt.target.value)}}></input>
            <br></br>
            <select id="temp" name="temp" value={temp} onChange={(evt) => {setTemp(evt.target.value)}}>
    a            <option value="1">artic cold</option>
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
                <option value="4">Torrential Downpour</option>
                <option value="5">Light Snow</option>
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
    )
}

export default NewWeatherForm;