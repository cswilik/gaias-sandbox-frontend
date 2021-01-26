import React, {useState, useEffect} from 'react'
import WeatherDetailPopup from "./WeatherDetailPopup";
import WeatherScroller from "./WeatherScroller";
import Search from "./Search"


function MainPage({currentUser}) {
    const [weathers, setWeathers] = useState([])
    const [regions, setRegions] = useState([])
    const [selectedRegion, setSelectedRegion] = useState(8)
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

    return(
        <div className="main-page" onClick={handleWeatherPopup}>
            <WeatherScroller allWeathers={weathers} user={currentUser} />
            <Search onSelectRegion={setSelectedRegion}/>
            {clickedRegion ? <WeatherDetailPopup allWeathers={weathers} selectedRegion={selectedRegion}/> : null}
        </div>
    );
}


export default MainPage;