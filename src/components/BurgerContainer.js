import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {


  render(){
    return (
      <div className="BurgerContainer">
        <BurgerFilter filterBurgers={this.props.filterBurgers}/>
        <BurgerList allBurgers={this.props.allBurgers} showBurger={this.props.showBurger} deleteBurger={this.props.deleteBurger}/>
      </div>
    )
  }
}
