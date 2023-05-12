import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const users = useSelector((state) => state.users);
  
  return (
    <div>
      <h1>Users</h1>
      <Link to ='/addUser'>Add User</Link>
      {/* table to display users */}
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Books</th>
          </tr>
        </thead>
        <tbody>
          {/* map through users and display them in the table */}
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.books}</td>
                <td>
                <button>Edit</button>
                <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
