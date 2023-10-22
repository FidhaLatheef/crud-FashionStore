import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/userEdit.css';

const UserEditPage = () => {
  const { id } = useParams(); // Get the user ID from URL parameter

  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:8000/users/getUserById/${id}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id]);


  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:8000/users/updateUserById/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      console.log('User updated successfully');

      window.location.href = '/userList';
    } catch (error) {
      console.log('Error updating user:', error);
    }
  };

  return (
    <div>
      <h1 className="heading">Edit User</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          Name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="input"
          />
        </label>
        <br />
        <label className="label">
          Email:
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="input"
          />
        </label>
        <br />
        <label className="label">
          Mobile:
          <input
            type="number"
            name="mobile"
            value={user.mobile}
            onChange={handleChange}
            className="input"
          />
        </label>
        <br />
        <label className="label">
          Password:
          <input
            type="number"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="input"
          />
        </label>
        <br />
        <button type="submit" className="button">
          Update
        </button>
      </form>
    </div>
  );
};

export default UserEditPage;
