import React, { Component } from 'react';
import AddHabit from './addHabit';
import Habit from './habit';

class Habits extends Component {
  render() {
    console.log('habits');
    return (
      <div className="habits">
        <ul>
          <AddHabit 
            onAdd={this.props.onAdd}
          />
          {this.props.habits.map(habit => (
            <Habit
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
          <button className="habits-reset" onClick={this.props.onReset}
          >Reset All</button>
        </ul>
        
      </div>
    );
  }
}

export default Habits;