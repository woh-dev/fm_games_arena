import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="game">
        {this.props.data.editors_choice === 'Y' ? <i className="material-icons choice">stars</i> : <i className="material-icons not-choice">star_border</i>}
        <div className="game-name">
          <h4>{this.props.data.title}</h4>
        </div>
        <div className="game-platform">
        {this.props.data.platform}
        </div>
        <div className="game-details">
          {this.props.data.score} stars | Genre: {this.props.data.genre}
        </div>
      </div>
    );
  }
}

export default Game;
