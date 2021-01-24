import React, {useState, useEffect} from 'react'
import MapContainer from "./MapContainer";
import WeatherDetailPopup from "./WeatherDetailPopup";
import WeatherScroller from "./WeatherScroller";

function MainPage({currentUser}) {
    const [weathers, setWeathers] = useState([])
    const [regions, setRegions] = useState([])

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

    return(
        <div>
            <p>This is the main page!!!</p>
            <MapContainer allWeathers={weathers} allRegions={regions} />
            <WeatherDetailPopup allWeathers={weathers} />
            <WeatherScroller allWeathers={weathers} user={currentUser} />
        </div>
    );
}


export default MainPage;