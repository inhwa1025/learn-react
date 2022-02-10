import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    console.log(this.props.totalCount);
    return (
      <nav className="navbar">
        <i class="navbar-logo fa-solid fa-leaf"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;