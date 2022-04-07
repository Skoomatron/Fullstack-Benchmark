import React from "react";
import axios from 'axios';
import moment from 'moment';

class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
    }
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

fetchData () {
  axios.get('/api/posts')
  .then((response) => {
    console.log(response)
    this.setState({data: response.data.sort()})
  })
  .catch((error) => {
    console.log(error)
  })
}

render() {
  return (
      <div>{this.state.data.map((value, index) => {
        const time = moment(this.state.data[index].createdAt).fromNow();
        console.log(value)
        return (
          <div className='post'>
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
            <p>{this.state.data[index].body}</p>
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
