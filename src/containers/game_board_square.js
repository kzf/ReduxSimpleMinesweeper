import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { incrementScore } from '../actions/increment_score';
import { bindActionCreators} from 'redux';

class GameBoardSquare extends Component {
  constructor(props) {
    super(props);

    this.incrementSquare = props.incrementSquare.bind(this);
  }

  render() {
    return (
      <div className="board-square" onClick={() => this.props.incrementSquare(this.props.i, this.props.j)}>
        {this.props.value}
      </div>
    );
  }
}

export default GameBoardSquare;
