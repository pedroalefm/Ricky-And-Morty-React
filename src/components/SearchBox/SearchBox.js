import React from 'react'
import './SearchBox.css'
const SearchBox = ({searchfield, searchChange}) =>{
    return(
        <div className = 'pa2 '>       
            <input
                className = "pa2 input-reset ba bg-white-60 w-100 measure"
                type = 'search' 
                placeholder = 'Ex.: Morty'
                onChange = {searchChange}
                
            />

        </div>
    )
}
export default SearchBox