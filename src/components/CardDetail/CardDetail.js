import React from 'react'
import EpisodeList from '../EpisodeList/EpisodeList.js'

const CardDetail = ({personDetail, onRouteChange, epiPerson}) =>{
    return (
       
        <div >
         
                
            <div className = "pa2 mr2" >
              
                <div className = "tc bg-transparent dib br3  ">

                    <div className = "tl">
                        <button className="b ph3 pv2 no-underline br-pill input-reset ba b--black bg-blue grow pointer f7" onClick = {onRouteChange}>Fechar</button>
                    </div>

                    <img className ="br-100  h6 w6 dib ba b--black-05 pa2 ml2 shadow-5"  alt = 'person' src = {personDetail.image} />
                    <div className = "tc ml2 measure bg-black-20 dib br3 pa6 mr2  shadow-5">

                        <h2 className = "f4" >{personDetail.name}</h2>
                        <hr class="mw6 bb bw1 b--black-10"/>
                        <p className="lh-copy measure center f8 black-70">Id : {personDetail.id}</p>
                        <p className="lh-copy measure center f8 black-70">Status : {personDetail.status}</p>
                        <p className="lh-copy measure center f8 black-70">Specie : {personDetail.species}</p>
                        <hr class="mw6 bb bw1 b--black-10"/>
                    </div>
                    <div className = "ma2 shadow-5 bg-black-20 pa2">

                        <h2 className = "f3">Episódios</h2>
                        <EpisodeList  episodies = {epiPerson}/>
                    </div>
                    </div>
                    

            </div>
    

        </div>
           

    )

}
export default CardDetail;