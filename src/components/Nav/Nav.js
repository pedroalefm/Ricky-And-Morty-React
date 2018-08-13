import React from 'react'
import './Nav.css'
import SearchBox from '../SearchBox/SearchBox.js'
import SelectBox from '../SelectBox/SelectBox.js'
const Nav = ({searchChange, filter,selectChangeStatus, elementosStatus, selectChangeGenre, elementsGenre})=>{
    return (
        <div>
            <nav className="flex justify-between bb b--white-10 bg-black-60">
               
                    <div className="center   items-center">
                        <div className="center  flex items-center cf">
                            <SearchBox searchChange = {searchChange}/>
                            <button className="b ph3 pv2 input-reset ba b--black bg-blue grow pointer f6" onClick = {filter}>Search</button>
                        </div>
                        <div className="center pa0 flex items-center">
                            <SelectBox selectChange = {selectChangeStatus} elements = {elementosStatus} />
                            <SelectBox selectChange = {selectChangeGenre} elements = {elementsGenre} />
                        </div>
                    </div>
                </nav>
        </div>



    )

}
export default Nav 