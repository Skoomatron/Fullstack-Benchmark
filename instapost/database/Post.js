const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.Promise = global.Promise;

const postSchema = new mongoose.Schema(
  {
    username: String,
    imageUrl: String,
    body: String,
    likes: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

const getData = (res) => {
  let query = Post.find({});
  query.exec((err, data) => {
    if (err) {
      return err;
    }
    res.send(data);
  })
}

const findID = (postId) => {
  return Post.findByIdAndUpdate(postId, {$inc: {likes: 1}}, {new: true});
};

const createPost = (params) => {
  console.log(params, 'these are db params')
  // mongo IDs are auto-generated if not provided
  try {
    db.collection('Post').insertOne({
      username: params.username,
      imageUrl: params.imageUrl,
      body: params.body});
  } catch (error) {
      console.log(error, 'DB Write Failed')
  }
}


module.exports = {Post, getData, findID, createPost};
