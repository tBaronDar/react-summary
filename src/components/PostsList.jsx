import { useLoaderData } from "react-router-dom";

import Post from "./Post";

import classes from "./PostsList.module.css";

function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              author={post.author}
              body={post.body}
              key={post.body}
              id={post.id}
            />
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
