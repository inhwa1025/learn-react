import { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      {id: 1, name: "Reading", count: 0},
    ],
  };

  render() {
    return (
    <>
      <Navbar />
      <Habits />
    </>
  );
  }
}

export default App;
