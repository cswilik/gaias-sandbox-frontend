import React, {useState, useEffect} from 'react'
import WeatherScroller from "./WeatherScroller";
import Search from "./Search"
import { MapContainer, TileLayer, Marker, Popup, FeatureGroup, Rectangle, ImageOverlay } from 'react-leaflet'
import WeatherDetail from "./WeatherDetail";
import WeatherForm from "./WeatherForm";

function MainPage({currentUser}) {
    const [weathers, setWeathers] = useState([])
    const [regions, setRegions] = useState([])
    const [selectedRegion, setSelectedRegion] = useState(22)
    const [search, setSearch] = useState("")
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/weathers`)
          .then(resp => resp.json())
          .then(data => setWeathers(data))
      }, [])

    useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/regions`)
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

   

    const featureGroups = regions.map((region) => {
        const rectangle = [
            [region["latMin"], region["longMin"]],
            [region["latMax"], region["longMax"]]
        ]

        const weather = weathers.find((weather) => {
            return weather.region.id === region.id
        })

        return(
            <FeatureGroup key={region.id}>
                <ImageOverlay url="https://media.giphy.com/media/3ohzdUimZF7zrY0fWo/giphy.gif" bounds={rectangle} opacity={0.6} play={false}/>
                <Popup>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">

                                <WeatherDetail region={region} weather={weather} />
                            </div>
                            <div className="flip-card-back">
                                <WeatherForm region={region} weather={weather} onWeatherFormSubmit={handleWeatherForm}/>
                            </div>
                        </div>
                    </div>
                </Popup>
                <Rectangle bounds={rectangle}>
                </Rectangle>
            </FeatureGroup>
        )
    })

    const TheMap = () => {
        const position = [37.0902, - 95.7129]

        return (
           <MapContainer
            center={position}
            zoom={5}
            style={{ width: '80%', height: '80%', margin: "auto" }}
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
            <WeatherScroller allWeathers={weathers} regions={regions}/>
            <Search onSelectRegion={setSelectedRegion} search={search} setSearch={setSearch}/>
            <TheMap />
        </div>
    );
}


export default MainPage;