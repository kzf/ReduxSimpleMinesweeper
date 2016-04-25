import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { incrementScore } from '../actions/increment_score';
import { bindActionCreators} from 'redux';
import GameBoardRow from './game_board_row';

class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.incrementScore = props.incrementScore.bind(this);
  }

  render() {
    const rows = this.props.board.map((row) => (
      <GameBoardRow row={row} />
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
    incrementScore
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
