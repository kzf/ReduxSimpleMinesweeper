import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { incrementScore } from '../actions/increment_score';
import { bindActionCreators} from 'redux';

class GameBoardSquare extends Component {
  render() {
    return (
      <div className="board-square">
      </div>
    );
  }
}

export default GameBoardSquare;
