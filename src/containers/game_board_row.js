import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { incrementScore } from '../actions/increment_score';
import { bindActionCreators} from 'redux';
import GameBoardSquare from './game_board_square';

class GameBoardRow extends Component {
  constructor(props) {
    super(props);

    this.incrementSquare = props.incrementSquare.bind(this);
  }

  render() {
    const squares = this.props.row.map((square, j) => (
      <GameBoardSquare value={square} i={this.props.i} j={j} incrementSquare={this.incrementSquare} />
    ))
    return (
      <div className="board-row" >
        {squares}
      </div>
    );
  }
}

export default GameBoardRow;
