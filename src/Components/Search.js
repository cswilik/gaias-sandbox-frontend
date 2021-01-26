import React from "react";

function Search({onSelectRegion, search, setSearch}){

    console.log(search)
    return(
        <div>
            <input
            type="text"
            value={search}
            placeholder="Search..." 
            onChange={(evt) => {setSearch(evt.target.value)}}
            />
        </div>
    );
}

export default Search;