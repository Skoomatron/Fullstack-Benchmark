import React from 'react';
import axios from 'axios';

class Create extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      username: '',
      url: 'http://placecorgi.com/200/200',
      body: '',
    }
    this.listener = this.listener.bind(this)
    this.submit = this.submit.bind(this)
  }

  listener (event) {
    const text = event.target.value;
    this.setState({...this.state, [event.target.name]: text});
  }

  submit () {

    if (this.state.username && this.state.body && this.state.url) {
      axios.post('/api/posts', {
        username: this.state.username,
        body: this.state.body,
        imageUrl: this.state.url,
      })
      .then((response) => {
        console.log(response, 'this is submit response')
      })
      .catch((error) => {
        console.log(error, 'Post unsuccessful!')
      })
    } else {
      console.log('All forms must be filled out to submit!')
    }
  }

  render () {
    return (
      <div>
        <form className="create">
          <h3>Add a Post!</h3>
            <input class="create__input" type="text" name='username'
              value={this.state.username} placeholder="Username" onChange={this.listener}/>
            <input class="create__input" type="text" name='url'
              value={this.state.url} placeholder="Image URL" onChange={() => {
                console.log('Just going to throw a corgo down, mlem.')
              }}/>
            <textarea class="create__body__textarea" name='body'
              value={this.state.body} placeholder="Here goes your post content." onChange={this.listener}>
            </textarea>
            <button class="create__button" type="submit" onClick={() => {
              this.submit()}}>Send</button>
        </form>
      </div>
    )
  }
}

export default Create;

