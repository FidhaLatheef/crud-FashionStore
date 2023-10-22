import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/userList.css';

const UserListingPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8000/users/getUserList');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log('Error fetching users:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await fetch(`http://localhost:8000/users/deleteUserById/${id}`, {
        method: 'DELETE',
      });

      console.log('user deleted')
      fetchUsers();

    } catch (err) {
      console.log(err)
    }

  }

  return (
    <div>
      <h1>User Listing Page</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>
                <Link to={`/userEdit/${user._id}`} className="edit-link">Edit</Link>
                <button onClick={() => deleteUser(user._id)} className="delete-link">Delete</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListingPage;
