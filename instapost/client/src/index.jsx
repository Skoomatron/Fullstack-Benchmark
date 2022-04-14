import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Post from './components/Post.jsx';
import Feed from './components/Feed.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        <div className="nav">
          <span className="nav__logo" >
            Instapost
          </span>
        </div>

        <div className="main">
          <Feed />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
