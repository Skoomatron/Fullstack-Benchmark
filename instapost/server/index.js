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

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
