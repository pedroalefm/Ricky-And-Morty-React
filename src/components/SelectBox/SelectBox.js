import React from 'react'
import './SelectBox.css'
const SelectBox = ({elements, selectChange})=>{
    return(
        <div className = 'pa2  styled-select slate black'>
            <select  onChange = {selectChange}  >
                {
                    elements.map((elemento, index)=>{
                        return(
                            <option className = "bg-white-10 black"   key = {index} value = {elements[index].value} >{elements[index].text}</option>
                        
                        )
                    })
                 }
          
            </select>
        </div>
    )
}
export default SelectBox