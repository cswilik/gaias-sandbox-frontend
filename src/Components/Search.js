import React, {useState, useEffect} from "react";

function Search({onSetPosition}){
    const [states, setStates] = useState([])
    const [search, setSearch] = useState("")
    const url = process.env.NODE_ENV === 'production' ? "https://gaias-sandbox-backend.herokuapp.com" : "http://localhost:3000"

    useEffect(() => {
        fetch(`${url}/states`)
          .then(resp => resp.json())
          .then(data => setStates(data))
      }, [])

    function handleSearchSubmit(evt) {
        evt.preventDefault();
        console.log("clicked")
        const searchedState = states.find(state => {
            return state.name.toLowerCase().includes(search.toLowerCase())
            
        })
        

        const newPosition = [searchedState.region.centerLat, searchedState.region.centerLong]
        console.log(newPosition)
        onSetPosition(newPosition)
    }

    return(
        <form className="searchBar" onSubmit={handleSearchSubmit}>
            <input
            className="searchInput"
            type="search"
            value={search}
            placeholder="Search..." 
            onChange={(evt) => {setSearch(evt.target.value)}}
            />
            {/* <i className="fa fa-search"></i> */}
            <button type="submit" className="fa fa-search"></button>
        </form>
    );
}

export default Search;