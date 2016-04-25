import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { incrementScore } from '../actions/increment_score';
import { bindActionCreators} from 'redux';
import GameBoardSquare from './game_board_square';

class GameBoardRow extends Component {
  render() {
    const squares = this.props.row.map((square) => (
      <GameBoardSquare square={square} />
    ))
    return (
      <div className="board-row">
        {squares}
      </div>
    );
  }
}

export default GameBoardRow;
