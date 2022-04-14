import Post from "./Post.jsx";
import React from "react";
import Create from './Create.jsx';

function Feed(props) {




  return (
    <div className='feed'>
      <Create />
      <Post />
    </div>
  );
}

export default Feed;
