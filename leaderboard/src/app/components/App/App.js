import React, {Component} from 'react';
import styles from './App.css';
import Leaderboard from '../Leaderboard';
import queryString from 'query-string';
import $ from 'jquery';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {};

    this.queryParams = queryString.parse(window.location.search);

    //setTimeout(this.loadTestData.bind(this), 50);

    this.loadResults();
    setInterval(this.loadResults.bind(this), 30000);
  }
  loadTestData () {
    this.setState({
      results: [
        {"first_name":"System","last_name":"Administrator","score":"100","date":"04/26/2016"},
        {"first_name":"Bubba","last_name":"Gump","score":"99","date":"04/28/2016"},
        {"first_name":"Bubba","last_name":"Gump","score":"99","date":"04/28/2016"},
        {"first_name":"Bubbas","last_name":"Automated","score":"99","date":""},
        {"first_name":"Courseware","last_name":"Admin","score":"75","date":"04/27/2016"},
        {"first_name":"Sales","last_name":"Admin","score":"75","date":"04/27/2016"},
        {"first_name":"Report Access","last_name":"Automated","score":"0","date":""}
      ]
    });

    setTimeout(() => {
      this.setState({
        results: [
          {"first_name":"System","last_name":"Administrator","score":"100","date":"04/26/2016"},
          {"first_name":"Bubba","last_name":"Gump","score":"99","date":"04/28/2016"},
          {"first_name":"Bubba","last_name":"Gump","score":"99","date":"04/28/2016"},
          {"first_name":"Bubbas","last_name":"Automated","score":"99","date":""},
          {"first_name":"Courseware","last_name":"Admin","score":"85","date":"04/27/2016"},
          {"first_name":"Courseware","last_name":"Admin","score":"75","date":"04/27/2016"},
          {"first_name":"Sales","last_name":"Admin","score":"75","date":"04/27/2016"},
          {"first_name":"Report Access","last_name":"Automated","score":"0","date":""}
        ]
      });
    }, 2000);
  }
  loadResults () {
    console.log('load results: ' + $);
    $.ajax({
      type: 'GET',
      url: 'https://3esuperhero.yourcoursewarehosting.com/data/json/report/ActivityLeaderboard?activity=' + this.queryParams.activity + '&count=20',
      async: true,
      data: {},
      beforeSend: (xhr) => {
        xhr.setRequestHeader('Authorization', 'Basic ' + window.btoa(unescape(encodeURIComponent('reports' + ':' + '@llen123!'))))
      }
    }).done((data) => {
      this.setState({
        results: data && data.filter(r => r.score && r.score !== '0')
      });
    });
  }
  render () {
    return (
      <div className="App">
        <div className="man-container">
          <img className="man" src={require('./man.png')}/>
        </div>
        <div className="woman-container">
          <img className="woman" src={require('./woman.png')}/>
        </div>
        <div className="leaderboard-area">
          <Leaderboard
            results={this.state.results || []}
          />
        </div>
      </div>
    );
  }
}

export default App;
