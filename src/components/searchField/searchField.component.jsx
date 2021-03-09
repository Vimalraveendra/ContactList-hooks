import React from 'react'
import "./searchField.css"
import {FaSistrix } from 'react-icons/fa';

const SearchField =()=>{
    console.log("child1 rendered")
    return(
        <div className='searchField-container'>
        <FaSistrix className="search-icon"/>
        <input type="search"  />
        </div>
    )
}

export default SearchField;