import React, { Component } from 'react'
import Episode from '../Episode/Episode.js'


const teste = ({ep})=>{
    return (
        <div>
            <Episode name = {ep}/>

        </div>
    )
}

class EpisodeList extends Component {

    constructor(){
        super();
        this.state ={
            name: [],
            season:[],
            date: [],
            epi: []
            
        }
    }

    componentDidMount() {
        const {episodies} = this.props
        
        episodies.map((user, index)=>{
            fetch(episodies[index]).then(res =>{
                return res.json();
            }).then(episode => {
                this.setState({name: this.state.name.concat(episode.name), season: this.state.season.concat(episode.episode) , date: this.state.date.concat(episode.air_date)});
            })
    
        })
      
        
    }

    render(){
     
        return (
            

            this.state.name.map((user, index)=>{
                return(
                    <div>
                        <ul className="list pl0 mt0 measure center">
                            <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
                                <Episode key = {index} name ={this.state.name[index]} airDate = {this.state.date[index]} episode ={this.state.season[index]}   />

                            </li>
                        </ul>
                    </div>

                )
              
            })

        )

    }
  

}

export default EpisodeList