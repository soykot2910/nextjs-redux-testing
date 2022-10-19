import React from "react";

const SingleUser = ({ user }) => {
  return (
    <div>
      <h3>{user.name}</h3>
    </div>
  );
};

export default SingleUser;

export async function getServerSideProps(ctx) {
  const { params } = ctx;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      user: data,
    },
  };
}
