import React, { Component } from 'react';
import Game from './Components/Game'
import Nav from './Components/Nav'
import './App.css';
const data = require('./data.json')

class App extends Component {
  componentWillMount = async () => {
    this.apiCall()
  }

  apiCall = () => {
    // Mock fetch and set state.
    this.setState({
      games: data,
      visible: data,
    })
  }

  filterGames = (e) => {
    // Convert to lowercase and filter based on title.
    const visible = this.state.games.filter((game) => {
      return game.title.toLowerCase().includes(e.target.value.toLowerCase())
    })
    // Update state;
    this.setState({
      visible
    })
  }

  sortGames = (e) => {
    const sortType = e.target.value;
    const visible = this.state.visible.sort((a, b) => {
      if (sortType === 'platform' || sortType === 'title' || sortType === 'genre') {
        // Make sure text sorts based on lowercase.
        if (a[sortType].toLowerCase() < b[sortType].toLowerCase()) {
          return -1;
        }
        if (a[sortType].toLowerCase() > b[sortType].toLowerCase()) {
          return 1;
        }
        return 0;
      } else {
        // Sort editors choice and score in inverse order.
        if (a[sortType] < b[sortType]) {
          return 1;
        }
        if (a[sortType] > b[sortType]) {
          return -1;
        }
        return 0;

      }
    })
    // Update state;
    this.setState({
      visible
    })
  }




  render() {
    return (
      <div id="App">
        <Nav handleSearch={this.filterGames} handleSort={this.sortGames}/>
        <div id="Content">
          {this.state.visible.length ? this.state.visible.map(game => <Game key={JSON.stringify(game)} data={game}/>) : <h4 id="missing">Hmmm... Sorry, We Can't Find That.</h4>}
        </div>
      </div>
    );
  }
}

export default App;
