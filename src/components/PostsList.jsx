import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

import classes from "./PostsList.module.css";

function PostsList({ isPosting, hideModal }) {
  const [posts, setPosts] = useState([]);

  console.log(posts);

  function addPostHandler(postData) {
    setPosts((prevPosts) => {
      return [postData, ...prevPosts];
    });
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={hideModal}>
          <NewPost onCancel={hideModal} onPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post author={post.author} body={post.body} key={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h1>No posts available</h1>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
