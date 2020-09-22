import React, { useEffect, useState } from "react";
import { rootAPI } from "../api";
import { createPlaceholderImage, fetchData } from "../helpers";

const Users = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetchData(rootAPI, setUsersData);
  }, []);

  return (
    <div className="container">
      <div className="notification">
        <h2 className="title is-3">Users</h2>
      </div>
      <div className="container">
        <ul>
          {usersData.length === 0 ? (
            <p>Loading users...</p>
          ) : (
            usersData.map(({ name, age }) => (
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src={createPlaceholderImage(96)} alt="" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4" key={name + age}>
                        {name}, {age} years old
                      </p>
                      <p className="subtitle is-6">@{name.toLowerCase()}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Users;
