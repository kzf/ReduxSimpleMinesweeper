import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { incrementScore } from '../actions/increment_score';
import { incrementSquare } from '../actions/increment_square';
import { bindActionCreators} from 'redux';
import GameBoardRow from './game_board_row';

class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.incrementScore = props.incrementScore.bind(this);
    this.incrementSquare = props.incrementSquare.bind(this);
  }

  render() {
    const rows = this.props.board.map((row, i) => (
      <GameBoardRow row={row} incrementSquare={this.incrementSquare} i={i} />
    ))
    return (
      <div className="game-board">
        {rows}
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
    incrementSquare
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
