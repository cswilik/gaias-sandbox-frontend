import React, {useState, useEffect} from "react";

function Search({onSetPosition}){
    const [states, setStates] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/states`)
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