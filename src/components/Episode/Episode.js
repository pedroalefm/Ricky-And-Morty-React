import React from 'react'



const Episode = ({name, airDate, episode})=>{
    return (
         <div className=' tl bg-light-green   dib br3 pa3 ma2'>
                 <h4>{name}</h4>
                 <span>Data de estréia : {airDate}</span>
                 <p>Temporada : {episode}</p>
         </div>
     )
}
export default Episode