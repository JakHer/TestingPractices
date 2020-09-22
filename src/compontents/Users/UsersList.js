import React from "react";
import Users from "./Users";

const UsersList = ({ users }) =>
  users.length === 0 ? <p>Loading users...</p> : users.map(({ name, age }) => <Users key={name} name={name} age={age} />);

export default UsersList;
