import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from '../components/CardList/CardList.js'
import SearchBox from '../components/SearchBox/SearchBox.js'
import SelectBox from '../components/SelectBox/SelectBox.js'
import CardDetail from '../components/CardDetail/CardDetail.js'
import Footer from '../components/Footer/Footer.js'
import Nav from '../components/Nav/Nav.js'

class App extends Component {
  constructor(){
    super();

    this.state = {
      page:'https://rickandmortyapi.com/api/character' ,
      persons: [],
      nextPage: '',
      searchfield: '',
      prevPage: '',
      statusPossible: [{text: 'Status', value: ''},{text: "Alive", value : "alive"} ,{ text : "Dead", value : 'dead'},{text :  "Unknow", value : 'unknow'}],
      genderPossible: [{text: 'Gênero', value: ''},{text: "Male", value: 'male'},{text:"Female", value:'female'},{text: "Genderless", value: 'genderless'},{text:"Unknow", value:'unknow'}],
      status: '',
      gender: '',
      idClicked: '',
      personIndexed: '',
      route: 'home',
      epiPerson: [],
      erro: 'ok'
    }
  }

  //conexão com o endpoint
  componentDidMount() {
    let page = this.state.page;
    fetch(page ).then(res =>{
      if(res.ok){
        this.state.erro = 'ok'
        
        return res.json();
        console.log(res.ok)
      }else{
        throw Error(`Request rejected with status ${res.status}`);
       this.state.erro = 'notOk'
      }
      
      
    }).then(character => {
      this.setState({persons: character.results, nextPage: character.info.next,prevPage: character.info.prev })

    }).catch(function(error) {
      
    })
    
  }

  

  //Voltar e mudar de página
  onClickPrev = (event) => {
    if(this.state.prevPage === ''){
      console.log('Desabilitar botão')
    }else{
      this.state.page = this.state.prevPage;
      this.componentDidMount()

    }

    
  }
  onClickNext = (event) => {
    if(this.state.nextPage === ''){
      console.log('Desabilitar botão')
    }else{
      this.state.page = this.state.nextPage;
      this.componentDidMount()

    }
  
  }
  //

  //aplica os filtros, utilizar o endpoint fornecido pela API
  filterFunction = (event ) =>{
    this.state.page =  `https://rickandmortyapi.com/api/character/?name=${this.state.searchfield}&status=${this.state.status}&gender=${this.state.gender}`
    this.componentDidMount()
    
  }

  //Filho se comunicar com o pai, sobre a searchbar
  onSearchChange = (event) => {
    this.setState ({searchfield : event.target.value})
    
  }

  //métodos para filho se comunicar com o pai sobre os filtros
  onSelectChangeStatus = (event) => {
    this.setState ({status : event.target.value})
    console.log("mudando")
   // console.log(this.state.status)
  }
  onSelectChangeGender = (event) => {
    this.setState ({gender : event.target.value})
    console.log(event.target.key)
   // console.log(this.state.status)
  }
  //////// Detalhe do personagem
  onClickDetail = (event) => {
    this.setState({personIndexed: this.state.persons[event.target.id] })
    this.componentDidMount();
    
    this.setState({route: 'detail'})
  }
  onRouteChange= () =>{
    this.setState({route: 'home'})
  }
  //Savar episódios do personagem selecionado
 

  render() {
   
    console.log(this.state.persons)
    

    const nameLower = ()=>{
      return this.state.searchfield.toLowerCase();
    }
    
    if(this.state.erro === 'ok'){
      return (        
           <div className="tc">
               <header className="tc bg-black-60 pal bb b-near-white w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
                 <h1 className = 'f1'> Ricky and Morty: The bible </h1>
               </header>
               {this.state.route === 'home'
                 ?
                 <div >
                   <Nav searchChange = {this.onSearchChange} filter = {this.filterFunction} selectChangeStatus = {this.onSelectChangeStatus} elementosStatus = {this.state.statusPossible} selectChangeGenre = {this.onSelectChangeGender} elementsGenre = {this.state.genderPossible}  />
                   <div className = "pa4">
                     <CardList click = {this.onClickDetail}  persons ={this.state.persons} />
                   </div>
                   <div className = "pa3">
           
                     {!(this.state.prevPage === '')?<button className="f6 grow no-underline br-pill  ba pa2 bw1 ph3 pv2 mb2 dib dark-gray" onClick = {this.onClickPrev}>Prev</button>:''}
                     {!(this.state.nextPage === '')?<button className="f6 grow no-underline br-pill ma3 ba bw1 pa2 ph3 pv2 mb2 dib dark-gray" onClick = {this.onClickNext}>Next</button>:''}
                   
                   </div>
                   
                   </div>
                 :
                 <CardDetail onRouteChange={this.onRouteChange} personDetail = {this.state.personIndexed} epiPerson ={this.state.personIndexed.episode}/>
               }
               
               <Footer/>
     
           </div>
         );
      
    }else{
      return <h1>Error 404</h1>
    

    }


  
  }
}


export default App;
