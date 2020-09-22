import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(`http://run.mocky.io/v3/be7170f0-e010-4e46-a3db-05f91330b403?mocky-delay=400ms`);
        setUsersData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  });

  return (
    <div className="container">
      <div className="notification">
        <h2 className="title is-3">Users</h2>
      </div>
      <div className="container">
        {usersData.length === 0 ? (
          <p>Loading users...</p>
        ) : (
          usersData.map(({ name, age }) => (
            <li key={name}>
              {name} is {age} years old
            </li>
          ))
        )}
      </div>
    </div>
  );
};

export default Users;
