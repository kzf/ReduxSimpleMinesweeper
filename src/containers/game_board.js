import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { incrementScore } from '../actions/increment_score';
import { bindActionCreators} from 'redux';

class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.incrementScore = props.incrementScore.bind(this);
  }

  render() {
    return (
      <div className="game-board">
        <div className="board-row">
          <div className="board-square"></div>
          <div className="board-square"></div>
          <div className="board-square"></div>
        </div>
        <div className="board-row">
          <div className="board-square"></div>
          <div className="board-square"></div>
          <div className="board-square"></div>
        </div>
        <div className="board-row">
          <div className="board-square"></div>
          <div className="board-square"></div>
          <div className="board-square"></div>
        </div>
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
