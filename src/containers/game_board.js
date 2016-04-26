import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { incrementScore } from '../actions/increment_score';
import { incrementSquare } from '../actions/increment_square';
import { newGame } from '../actions/new_game';
import { bindActionCreators} from 'redux';
import GameBoardRow from './game_board_row';

class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.incrementScore = props.incrementScore.bind(this);
    this.incrementSquare = props.incrementSquare.bind(this);
    this.newGame = props.newGame.bind(this);
  }

  render() {
    const rows = this.props.board.map((row, i) => (
      <GameBoardRow key={i} row={row} incrementSquare={this.incrementSquare} i={i} />
    ))
    return (
      <div className="game-board">
        {rows}
        <div onClick={() => this.newGame(10, 10)}>New Game</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    score: state.score,
    board: state.board
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    incrementScore,
    incrementSquare,
    newGame
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
