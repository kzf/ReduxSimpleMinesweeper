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
      'uncovered': !this.props.square.covered,
    });

    let contents = '';
    if (!this.props.square.covered) {
      contents = this.props.square.nearby;
    }

    return (
      <div className={squareClasses}
           onClick={() => this.props.incrementSquare(this.props.j, this.props.i)}>
        {contents}
      </div>
    );
  }
}

export default GameBoardSquare;
