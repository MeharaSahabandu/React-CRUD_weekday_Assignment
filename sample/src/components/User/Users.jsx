import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "./UserReducer";

export default function Users() {
  const users = useSelector((state) => state.users);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({id:id}));
    navigate("/");
  };

  return (
    <div>
      <h1>Users</h1>
      <Link to="/addUser">Add User</Link>
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
                  <Link to={`/updateUser/${user.id}`}>Edit</Link>
                  {/* <Link to={`/deleteUser/${user.id}`}>Delete</Link> */}
                  <button onClick={()=>handleDelete( user.id) }>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
