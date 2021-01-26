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
            return state.name.toLowerCase().includes(search)
            
        })
        

        const newPosition = [searchedState.region.centerLat, searchedState.region.centerLong]
        console.log(newPosition)
        onSetPosition(newPosition)
    }

    return(
        <form onSubmit={handleSearchSubmit}>
            <input
            type="text"
            value={search}
            placeholder="Search..." 
            onChange={(evt) => {setSearch(evt.target.value)}}
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default Search;