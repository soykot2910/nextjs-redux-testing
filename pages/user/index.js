import React from "react";
import Link from "next/link";

const user = ({ users }) => {
  return (
    <div>
      <h3>All Users</h3>
      {users.map((user) => {
        return (
          <>
            <Link href={`user/${user.id}`}>
              <h4>{user.name}</h4>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
}

export default user;
