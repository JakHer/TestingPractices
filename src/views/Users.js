import React, { useEffect, useState } from "react";
import { rootAPI } from "../api";
import { fetchData } from "../helpers";
import UsersList from "../compontents/Users/UsersList";

const Users = () => {
  const [usersData, setUsersData] = useState([]);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    fetchData(rootAPI, setUsersData, setErrors);
  }, []);

  return (
    <div className="container">
      <div className="notification">
        <h2 className="title is-3">Users</h2>
      </div>
      <div className="container">
        <ul>
          {!errors && <UsersList users={usersData} />}
          {errors && <p className="title is-error">Error</p>}
        </ul>
      </div>
    </div>
  );
};

export default Users;
