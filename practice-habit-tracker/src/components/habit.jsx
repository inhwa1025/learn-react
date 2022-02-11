import React, { Component } from 'react';

class Habit extends Component {
  render() {
    console.log('habit');
    const {name, count} = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button 
          className="habit-button habit-increase"
          onClick={function(){
            this.props.onIncrement(this.props.habit);
          }.bind(this)}
        >
          <i className="fa-solid fa-square-plus"></i>
        </button>
        <button 
          className="habit-button habit-decrease"
          onClick={function(){
            this.props.onDecrement(this.props.habit);
          }.bind(this)}
        >
          <i className="fa-solid fa-square-minus"></i>
        </button>
        <button 
          className="habit-button habit-delete"
          onClick={function(){
            this.props.onDelete(this.props.habit)
          }.bind(this)}
        >
        <i className="fa-solid fa-trash-can"></i>
        </button>
      </li>
    );
  }
}

export default Habit;