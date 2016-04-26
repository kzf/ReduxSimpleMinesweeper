import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { incrementScore } from '../actions/increment_score';
import { bindActionCreators} from 'redux';
import classNames from 'classnames';

class GameBoardSquare extends Component {
  constructor(props) {
    super(props);

    this.incrementSquare = props.incrementSquare.bind(this);
  }

  render() {
    const squareClasses = classNames({
      'board-square': true,
      'uncovered': !this.props.square.covered
    });

    return (
      <div className={squareClasses} onClick={() => this.props.incrementSquare(this.props.i, this.props.j)}>
        {this.props.square.covered}
      </div>
    );
  }
}

export default GameBoardSquare;
