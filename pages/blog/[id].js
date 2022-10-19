import React from "react";

const Post = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export async function getStaticProps(ctx) {
  const { params } = ctx;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: { id: `${post.id}` },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export default Post;
