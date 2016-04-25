import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { incrementScore } from '../actions/increment_score';
import { bindActionCreators} from 'redux';

class GameBoard extends Component {
  constructor(props) {
    super(props);

    console.log(props);
    this.incrementScore = props.incrementScore.bind(this);
  }

  render() {
    return (
      <div>
        Gam eBoard Goes here. Score:
        <span onClick={this.incrementScore}>{this.props.score}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    score: state.score
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    incrementScore
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
