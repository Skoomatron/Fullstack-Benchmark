import React from "react";
import axios from 'axios';
import moment from 'moment';
import BodyData from './BodyData.jsx'

class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      expand: false,
    }
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
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

toggleView() {
  this.setState({expand: !this.state.expand});
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
            <BodyData data={this.state} index1={index}/>
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
