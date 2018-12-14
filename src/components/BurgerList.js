import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = (props) => {


   let burgerList = props.allBurgers.map(burger =>{
     return <BurgerItem burger={burger} showBurger={props.showBurger} deleteBurger={props.deleteBurger} key={burger.name}/>
   })
  return (
    <div className="BurgerList">
      { burgerList }
    </div>
  )
}

export default BurgerList
