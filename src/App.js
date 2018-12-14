import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {

  state={
    burgers:[],
    burgersCopy: [],
    currentBurger: ' '
  }

  componentDidMount() {
    fetch("http://localhost:3001/burgers")
    .then(res => res.json())
    .then(burgersList => this.setState({burgers:burgersList, burgersCopy: burgersList}))
  }

  filterBurger=(e)=>{
    if(e.target.value === "Bougie"){
      this.bougieFilter()
    }else if(e.target.value === "Relatable"){
      this.relatebleFilter()
    }else if(e.target.value === "All"){
      this.allFilter()
    }
  }

  allFilter(){
    this.setState({
      burgersCopy: this.state.burgers
    })
  }

  relatebleFilter(){
    let arr = this.state.burgers.filter(burger=>{
      return burger.category === "Relatable"
    })
    this.setState({
      burgersCopy: arr
    })
  }

  bougieFilter(){
    let arr = this.state.burgers.filter(burger=>{
      return burger.category === "Bougie"
    })
    this.setState({
      burgersCopy: arr
    })
  }

  deleteBurger=(e)=>{

    let arr = this.state.burgersCopy.filter(burg =>{
      return burg !== e
    })
    this.setState({
      burgersCopy: arr
    })
  }

  showBurger = (burger)=>{
    this.setState({
      currentBurger: burger
    })
  }

  render() {

    return (
      <div id="App">
        <BurgerContainer allBurgers={this.state.burgersCopy} deleteBurger={this.deleteBurger} showBurger={this.showBurger} filterBurgers={this.filterBurger}/>
        <BurgerDisplay burgerGiven={this.state.currentBurger}/>
      </div>
    );
  }
}

export default App;
