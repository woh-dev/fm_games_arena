import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <input id="search" type="search" placeholder="Search..." onChange={this.props.handleSearch}></input>
        <select id="sort" name="sort" onChange={this.props.handleSort}>
          <option selected disabled>Sort By...</option>
          <option value="title">Title</option>
          <option value="platform">Platform</option>
          <option value="score">Score</option>
          <option value="genre">Genre</option>
          <option value="editors_choice">Editors Choice</option>
        </select>
      </div>
    );
  }
}

export default Nav;
