import React from "react";
import axios from 'axios';
import moment from 'moment';

class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      expand: false,
      buttonText: 'Show More',
    }
    this.fetchData = this.fetchData.bind(this);
    this.togglePosts = this.togglePosts.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  togglePosts() {
    this.setState({expand: !this.state.expand})
    if (this.state.expand === false) {
      this.setState({buttonText: 'Show Less'})
    } else {
      this.setState({buttonText: 'Show More'})
    }
  }

  postManagement(index) {
    let longData = this.state.data[index].body;
    let shortData = longData.split('').slice(0, 144).join('');
    let longFormattedPost = longData.split('\n');
    let shortFormattedPost = shortData.split('\n');
    let workingData = shortFormattedPost;

    if (this.state.expand) {
      return longFormattedPost;
    }
    return shortFormattedPost;
  }

fetchData () {
  axios.get('/api/posts')
  .then((response) => {
    this.setState({data: response.data})
  })
  .catch((error) => {
    console.log(error)
  })
}

render() {
  return (
      <div>{this.state.data.map((value, index) => {
        const time = moment(this.state.data[index].createdAt).fromNow();
        return (
          <div key={index} className='post'>
            <div className='post__byline'>
              <div className='center'>
                <img
                  className='avatar'
                  src='https://www.w3schools.com/w3images/avatar6.png'
                  alt='user avatar'
                />
                <span className='post__byline__user'>{this.state.data[index].username}</span>
              </div>
              {time}
            </div>
            <div className='post__image'>
              <img src={this.state.data[index].imageUrl} />
            </div>
              <div>{this.state.data.map((value, index) => {
                return (<div key={index}>{this.postManagement(index)[index]}
                </div>)
              })}<button onClick={() => {
                this.togglePosts()
              }}>{this.state.buttonText}</button></div>
              <div className='post__actions'>
              <div className='post__likes'>{this.state.data[index].likes}</div>
              <div className='post__buttons'>
                <button>Like</button>
                <button>Comment</button>
              </div>
            </div>
          </div>
        )})}
      </div>
    );
  }
}

export default Post;
