import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './Leaderboard.css';
import Row from '../Row';

class Leaderboard extends Component {
  generateResultKey (result) {
    const key = result.first_name + result.score;
    const count = (this.duplicateKeyCounts[key])
      ? this.duplicateKeyCounts[key] + 1
      : 1;

    this.duplicateKeyCounts[key] = count;
    return key + count;
  }
  render () {
    this.duplicateKeyCounts = {};
    return (
      <div className="Leaderboard">
        <header>
          <h1>Top Scores</h1>
          <img className="score-icon" src={require('./trophy.png')}/>
        </header>
        <ReactCSSTransitionGroup
          className="rows"
          transitionName="row"
          transitionEnterTimeout={550}
          transitionLeaveTimeout={50}
        >
          {this.props.results.map(this.renderResult.bind(this))}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
  renderResult (result, index) {
    return (
      <Row
        key={this.generateResultKey(result)}
        index={index}
        style={{
          transform: `translateY(${index * 60}px)`
        }}
        {...result}
      />
    );
  }
}

export default Leaderboard;
