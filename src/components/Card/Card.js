import React from 'react'

const Card = ({name, id, image, status, species, click, clickedId}) =>{
    return (
       
        <div  className=' tc bg-light-green dib br3 pa3 ma2 grow shadow-5'>
            
            <div onClick = {click} id = {clickedId} >

                <img  className ="br-100  h6 w6 dib ba b--black-05 pa2" alt = 'person' src = {image} id = {clickedId} />

                <h3 id = {clickedId}>{name} </h3>
                <hr class="mw3 bb bw1 b--black-10"/>

                <p id = {clickedId}>Id : {id}</p>
                <p id = {clickedId}>Status : {status}</p>
                <p id = {clickedId}>Specie : {species}</p>
            </div>
    

        </div>
           

    )

}
export default Card;