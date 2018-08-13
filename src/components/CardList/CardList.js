import React from 'react'
import Card from '../Card/Card.js'
const CardList = ({persons, click}) =>{
    return (
        <div>
            {
                persons.map((user, index)=>{
                    if(index< 10){
                        return (
                            
                            <Card key={index} id = {persons[index].id} name = {persons[index].name} image = {persons[index].image}
                            status = {persons[index].status} species ={persons[index].species} click = {click} clickedId = {index}
                            />
                        )
                    }
                    
                   
                 
                })
            }
        </div>
    )
}
export default CardList
