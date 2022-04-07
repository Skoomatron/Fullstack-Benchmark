const express = require('express');

const Post = require('../database/Post.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));


app.get('/api/posts', function(req, res) {
  if (!res) {
    res.status(404).send('failed response')
  }
  Post.getData(res);
});



// need to pass the id down the chain
app.patch('/api/posts/:postId', function(req, res) {
  Post.findID(req.params.postId)
  .then((response) => {
    res.send(response);
  })
  .catch((error) => {
    res.status(500).send(error, 'no data found at that id')
  })

})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
