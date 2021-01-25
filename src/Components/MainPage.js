import React, {useState, useEffect} from 'react'
import WeatherDetailPopup from "./WeatherDetailPopup";
import WeatherScroller from "./WeatherScroller";
import Search from "./Search"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function MainPage({currentUser}) {
    const [weathers, setWeathers] = useState([])
    const [regions, setRegions] = useState([])
    const [selectedRegion, setSelectedRegion] = useState(1)
    const [clickedRegion, setClickedRegion] = useState(false)

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

    function handleWeatherPopup() {
        setClickedRegion(!clickedRegion)
    }

    const TheMap =  () => {
        const position = [48.969404, -122.681376]
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
            <Marker position={position}>
                <Popup>
                    <div style={{width: '40%', height: '40%'}}>
                        <WeatherDetailPopup allWeathers={weathers} selectedRegion={selectedRegion}/>
                    </div>
                </Popup>
            </Marker>
            </MapContainer>
        )
    }

    return(
        <div className="main-page">
            <TheMap />
            <WeatherScroller allWeathers={weathers} user={currentUser} />
            <Search onSelectRegion={setSelectedRegion}/>
            {clickedRegion ? <WeatherDetailPopup allWeathers={weathers} selectedRegion={selectedRegion}/> : null}
        </div>
    );
}


export default MainPage;