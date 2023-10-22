import axios from 'axios';
import React, { useState } from 'react';

function UserLogin() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [mobileError, setmobileError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleForm = (e) => {
        e.preventDefault();

        if (name === '') {
            setNameError('Name is required');
          }
      
          if (email === '') {
            setEmailError('Email is required');
          }
      
          if (mobile === '') {
            setmobileError('Mobile number is required');
          }
      
          if (password === '') {
            setPasswordError('Password is required');
          }

        const data = {
            name: name,
            email: email,
            mobile: mobile,
            password: password,
        };
        axios.post('http://localhost:8000/users', data)

            .then(function (response) {
                console.log(response.data.message);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div>
            <form onSubmit={handleForm} style={styles.form}>
                <h2 style={styles.heading}>Login</h2>

                <label style={styles.label}>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                />
                {nameError && <span  style={{ color: 'red' }}>{nameError}</span>}

                <label style={styles.label}>Email:</label>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />
                {emailError && <span style={{ color: 'red' }}>{emailError}</span>}

                <label style={styles.label}>Mobile:</label>
                <input
                    type="number"
                    name="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    style={styles.input}
                />
                {mobileError && <span style={{ color: 'red' }}>{mobileError}</span>}

                <label style={styles.label}>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />
                {passwordError && <span  style={{ color: 'red' }}>{passwordError}</span>}

                <button type="submit" style={styles.button}>
                    Submit
                </button>
            </form>
        </div>
    );
}

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px',
        margin: '0 auto',
    },
    heading: {
        marginBottom: '20px',
        textAlign: 'center',
        fontSize: '24px',
        color: '#994860da',
    },
    label: {
        marginBottom: '5px',
    },
    input: {
        marginBottom: '10px',
        padding: '5px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        backgroundColor: '#994860da',
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default UserLogin;
