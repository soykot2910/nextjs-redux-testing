import React from "react";
import { fetchUser } from "../redux/slice/userSlice";
import { useAppDispatch, useAppSelector } from "../utils/hooks";

const UserDisplay = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.user);

  return (
    <div>
      {/* Display the current user name */}
      <button onClick={() => dispatch(fetchUser())}>Fetch user</button>
    </div>
  );
};

export default UserDisplay;
