import React from 'react';
import { Component } from 'react';
import GameBoard from '../containers/game_board';

export default class App extends Component {
  render() {
    return (
      <div>
        <h3>React simple starter</h3>
        <GameBoard />
      </div>
    );
  }
}
