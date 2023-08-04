import React from "react";
import { useSelector } from "react-redux";
import UserRow from "./UserRow";

const UsersList = (props) => {
  const usersList = useSelector((gs) => gs.usersList);
  return (
    <div>
      {usersList?.userList?.map((el) => (
        <UserRow {...el} />
      ))}
    </div>
  );
};

export default UsersList;
