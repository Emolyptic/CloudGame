import React, {Component} from 'react';
import styles from './Row.css';

class Row extends Component {
  render () {
    return (
      <div className="Row" style={this.props.style}>
        <span className="number">{this.props.index + 1}</span>
        <span className="name">{this.props.first_name}</span>
        <span className="score">{this.props.score}</span>
      </div>
    );
  }
}

export default Row;
