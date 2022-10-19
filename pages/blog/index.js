import React from "react";

const PostList = ({ data }) => {
  return (
    <div>
      <h2>Post list</h2>
      {data.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
}

export default PostList;
