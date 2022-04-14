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
      clickedID: null,
      likes: 0,
    }
    this.fetchData = this.fetchData.bind(this);
    this.togglePosts = this.togglePosts.bind(this);
    this.clickData = this.clickData.bind(this);
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

  clickData(event, id) { // working but not re-rendering per click
    axios.patch(`/api/posts/${id}`, {likes: this.state.likes})
    .then((response) => {
      this.setState({likes: response})
    })
    .catch((error) => {
      console.log(error, 'error at main level')
    })
  }

fetchData () {
  axios.get('/api/posts')
  .then((response) => {
    this.setState({data: response.data})
    console.log(this.state)
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
                <button onClick={() => {
                  this.clickData(event, this.state.data[index]._id)
                }}>Like</button>
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
