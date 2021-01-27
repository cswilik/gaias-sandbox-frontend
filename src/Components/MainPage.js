import React, {useState, useEffect} from 'react'
import WeatherScroller from "./WeatherScroller";
import Search from "./Search"
import { MapContainer, TileLayer, Marker, Popup, FeatureGroup, Rectangle, ImageOverlay } from 'react-leaflet'
import WeatherDetail from "./WeatherDetail";
import WeatherForm from "./WeatherForm";
import NewWeatherForm from "./NewWeatherForm";

function MainPage({currentUser}) {
    const [weathers, setWeathers] = useState([])
    const [regions, setRegions] = useState([])
    const [position, setPosition] = useState([37.0902, - 95.7129])
    
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

    function handleNewWeather(newWeather) {
        // const filteredRegions = regions.map((region) => {
        //     if(region.id === newWeather.region.id){
        //         const newWeathers = [...region.weathers, newWeather]
        //         return({
        //             name: region.name,
        //             latMin: region.latMin,
        //             latMax: region.latMax,
        //             longMin: region.longMin,
        //             longMax: region.longMax,
        //             centerLat: region.centerLat,
        //             centerLong: region.centerLong,
        //             weathers: newWeathers,
        //             id: region.id
        //         });
        //     }else{
        //         return region;
        //     }
        // })
        // console.log(filteredRegions)
        // setRegions(filteredRegions)
        const weathArr = [...weathers, newWeather]
        console.log(weathArr)
        setWeathers(weathArr)
    }

   function handleDelete(id) {
       const filteredWeathers = weathers.filter(weather => {
          return (weather.id !== id) 
       })

    //    const filteredRegions = regions.map((region) => {
    //        const newWeathers = region.weathers.filter((weather) => {
    //             return weather.id !== id
    //        })
    //        return({
    //             name: region.name,
    //             latMin: region.latMin,
    //             latMax: region.latMax,
    //             longMin: region.longMin,
    //             longMax: region.longMax,
    //             centerLat: region.centerLat,
    //             centerLong: region.centerLong,
    //             weathers: newWeathers,
    //             id: region.id
    //        });
    //    })
    //    setRegions(filteredRegions)
    //    console.log(filteredRegions)
    //    console.log(regions)
       setWeathers(filteredWeathers)
    }

    const tempColors = {
        "1": "#42A5F5",
        "2": "#3F51B5",
        "3": "#5E35B1",
        "4": "#7B1FA2",
        "5": "#AD1457",
        "6": "#B71C1C"
    } 

    const featureGroups = regions.map((region) => {
        const rectangle = [
            [region["latMin"], region["longMin"]],
            [region["latMax"], region["longMax"]]
        ]

        const weather = weathers.find((weather) => {
            return weather.region.id === region.id
        })

        if(weather){
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
                                    <WeatherForm region={region} weather={weather} onWeatherFormSubmit={handleWeatherForm} onSetPosition={setPosition} onDelete={handleDelete}/>
                                </div>
                            </div>
                        </div>
                    </Popup>
                    <Rectangle bounds={rectangle} fillColor={tempColors[weather.temp]} opacity={0} />
                </FeatureGroup>
            )
        }else {
            return(
                <FeatureGroup key={region.id}>
                    <ImageOverlay url="https://j.gifs.com/vq8EXV.gif" bounds={rectangle} opacity={0.6} play={false}/>
                    <Popup>
                        <NewWeatherForm currentUser={currentUser} region={region} onNewWeather={handleNewWeather}/>
                    </Popup>
                    <Rectangle bounds={rectangle} pathOptions={{fillOpacity: 0, opacity: 0}} />
                </FeatureGroup>
            );
        }
    })

    const TheMap = () => {

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
            <Search onSetPosition={setPosition} />
            <TheMap />
        </div>
    );
}

export default MainPage;