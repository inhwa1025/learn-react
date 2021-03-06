import { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      {id: 1, name: "Reading", count: 0},
      {id: 2, name: "Running", count: 0},
      {id: 3, name: "Coding", count: 0},
    ],
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, {id: Date.now(), name, count: 0}];
    this.setState({habits});
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(habit.id === item.id){
        return {...habit, count: habit.count + 1};
      }
      return item;
    });
    this.setState({habits});
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(habit.id === item.id){
        const count = habit.count - 1;
        return {...habit, count: count > 0 ? count: 0};
      }
      return item;
    });
    this.setState({habits});
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
  };

  handleReset = () => {
    const habits = this.state.habits.map(item => {
      if(item.count !== 0) {
        return {...item, count: 0}
      }
      return item;
    })
    this.setState({habits});
  };

  render() {
    return (
    <>
      <Navbar 
        totalCount={this.state.habits.filter(item => item.count > 0).length}
      />
      <Habits 
        id={this.state.habits.id}
        habits={this.state.habits}
        onAdd={this.handleAdd}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
        onReset={this.handleReset}
      />
    </>
  );
  }
}

export default App;
