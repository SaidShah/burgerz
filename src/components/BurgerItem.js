import React, { Component } from 'react';

const BurgerItem = (props) => {
  return (
    <div>
      <div className="BurgerItem">
          {props.burger.name}
      </div>
      <div className="BurgerBottomBun">
        <button onClick={e=> props.showBurger(props.burger)} name={props.burger.name}>Show</button>
        <button onClick={e=>props.deleteBurger(props.burger)} name={props.burger.name} >Delete</button>
      </div>
    </div>
  )
  
}

export default BurgerItem
