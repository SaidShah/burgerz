import React, { Component } from 'react';

class BurgerDisplay extends Component {
  state={
    cat: " ",
    bougie: " ",
    relateble: " "
  }

render(){
  return (
    <div className="BurgerDisplay">
      <img src={this.props.burgerGiven.imgURL}/>
      <br/>
      <h1>{this.props.burgerGiven.name}</h1>
      <br/>
      <select onChange={this.changeCategory} value={this.props.burgerGiven.category}>
        <option value="Relatable" >Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )
}
}

export default BurgerDisplay
