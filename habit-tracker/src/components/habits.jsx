import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    render() {
    return (
      <>
        {this.props.habits.map(habit => (
          <Habit 
            key={habit.id} 
            habit={habit} 
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </>
    );
  }
}

export default Habits;