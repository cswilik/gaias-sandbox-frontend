import React, {useState} from "react";
import Search from "./Search";

function MapContainer({allWeathers, allRegions}) {
    const [selectedRegion, setSelectedRegion] = useState(null)

    return(
        <div>
            <p>MAP</p>
            <Search onSelectRegion={setSelectedRegion}/>
        </div>
    );
}

export default MapContainer;