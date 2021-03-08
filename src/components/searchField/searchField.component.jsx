import React from 'react'
import "./searchField.css"

const SearchField =()=>{
    console.log("child1 rendered")
    return(
        <div className='searchField-container'>
        <input type="search"  />
        </div>
    )
}

export default SearchField;