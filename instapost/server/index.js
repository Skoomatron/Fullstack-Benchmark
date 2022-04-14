const express = require('express');

const Post = require('../database/Post.js');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));


app.get('/api/posts', function(req, res) {
  if (!res) {
    res.status(404).send('Failed response.')
  }
  Post.getData(res);
});

app.post('/api/posts', (req, res) => {
  let newPost = req.body;
  Post.createPost(newPost)
  // .then((response) => {
  //   res.send(response, 'Post Created!');
  // })
  // .catch((error) => {
  //   res.status(500).send(error, 'Couldnt add post!')
  // })
});

// need to pass the id down the chain
app.patch('/api/posts/:postId', function(req, res) {
  Post.findID(req.params.postId)
  .then((response) => {
    res.send(response);
  })
  .catch((error) => {
    res.status(404).send(error, 'Data update unsuccessful')
  })

})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
