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
  let query = Post.find().sort({createdAt: 1});
  query.exec((err, data) => {
    if (err) {
      return error;
    }
    res.send(data);
  })
}

const findID = (postId) => {
  return Post.findOneAndUpdate({_id: postId}, {$inc: {likes: 1}}, {new: true});
};


module.exports = {Post, getData, findID};
