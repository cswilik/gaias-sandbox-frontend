import React, {useState, useEffect} from 'react'
import WeatherScroller from "./WeatherScroller";
import Search from "./Search"
import { MapContainer, TileLayer, Marker, Popup, FeatureGroup, Rectangle, ImageOverlay } from 'react-leaflet'
import WeatherDetail from "./WeatherDetail";
import WeatherForm from "./WeatherForm";
import NewWeatherForm from "./NewWeatherForm";
import { rainGifs, tempColors, windGifs, cloudGifs } from "./HashMaps";

function MainPage({currentUser}) {
    const [weathers, setWeathers] = useState([])
    const [regions, setRegions] = useState([])
    const [position, setPosition] = useState([37.0902, - 95.7129])
    const url = process.env.NODE_ENV === 'production' ? "https://gaias-sandbox-backend.herokuapp.com" : "http://localhost:3000"
    
    useEffect(() => {
        fetch(`${url}/weathers`)
          .then(resp => resp.json())
          .then(data => setWeathers(data))
      }, [])

    useEffect(() => {
    fetch(`${url}/regions`)
        .then(resp => resp.json())
        .then(data => setRegions(data))
    }, [])

    function handleWeatherForm(newFormData) {
        const updatedWeathers =  weathers.map(weather => {
            if (weather.id === newFormData.id) {
                return newFormData;
            } else {
                return weather;
            }
        })
        setWeathers(updatedWeathers)
        
    }

    function handleNewWeather(newWeather) {
        const weathArr = [...weathers, newWeather]
        
        setWeathers(weathArr)
    }



   function handleDelete(id) {
       const filteredWeathers = weathers.filter(weather => {
          return (weather.id !== id) 
       })
       setPosition([37.0902, - 95.7129])
       setWeathers(filteredWeathers)
    }

    const featureGroups = regions.map((region) => {
        const rectangle = [
            [region["latMin"], region["longMin"]],
            [region["latMax"], region["longMax"]]
        ]

        const weather = weathers.find((weather) => {
            return weather.region.id === region.id && weather.user.id === currentUser.id
        })

        if(weather){
            return(
                <FeatureGroup key={region.id}>
                    <Rectangle bounds={rectangle} fillColor={(weather.cloud === 6) ? "black" : tempColors[weather.temp]} opacity={0} />
                    {rainGifs[weather.rain] ? <ImageOverlay url={rainGifs[weather.rain]} bounds={rectangle} opacity={0.6} play={false}/> : null}
                    {windGifs[weather.wind] ? <ImageOverlay url={windGifs[weather.wind]} bounds={rectangle} opacity={0.4} play={false}/> : null}
                    {cloudGifs[weather.cloud] ? <ImageOverlay url={cloudGifs[weather.cloud]} bounds={rectangle} opacity={0.3} play={false}/> : null}
                    <Popup>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <WeatherDetail region={region} weather={weather} />
                                </div>
                                <div className="flip-card-back">
                                    <WeatherForm region={region} weather={weather} onWeatherFormSubmit={handleWeatherForm} onSetPosition={setPosition} onDelete={handleDelete}/>
                                </div>
                            </div>
                        </div>
                    </Popup>
                </FeatureGroup>
            )
        }else {
            return(
                <FeatureGroup key={region.id}>
                    <ImageOverlay url="https://media.giphy.com/media/XrNry0aqYWEhi/giphy.gif" bounds={rectangle} play={false}/>
                    <Popup>
                        <NewWeatherForm onSetPosition={setPosition} currentUser={currentUser} region={region} onNewWeather={handleNewWeather}/>
                    </Popup>
                    <Rectangle bounds={rectangle} pathOptions={{fillOpacity: 0, opacity: 0}} />
                </FeatureGroup>
            );
        }
    })
// "https://j.gifs.com/vq8EXV.gif"
    const TheMap = () => {

        return (
           <MapContainer
            center={position}
            zoom={5}
            style={{ width: '80%', height: '80%', margin: "auto", boxShadow: '5px 5px 30px 2px rgba(255,255,255,0.75)' }}
            >
                <TileLayer
                    url='https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />

                {featureGroups}
            
                <Marker position={position}>
                </Marker>
            </MapContainer>
        )
    }




   
    return(
        <div className="main-page">
            <WeatherScroller allWeathers={weathers} regions={regions} currentUser={currentUser} />
            <Search onSetPosition={setPosition} />
            <TheMap />
        </div>
    );
}

export default MainPage;