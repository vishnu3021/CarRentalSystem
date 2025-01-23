import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const { password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setErrorMessage('Password and Confirm Password do not match!');
    } else {
      setErrorMessage('');
      alert('Sign-up successful!');
      // Add logic to handle successful sign-up, e.g., sending data to a server
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', border: '2px solid red' }}>
      <form onSubmit={handleSubmit} style={{ border: '2px solid red', padding: '20px' }}>
        <div>
          <label>Username:</label>
          <br />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div>
          <label>Password:</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div>
          <label>Confirm Password:</label>
          <br />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <div>
            <Link></Link>
          <input type="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  );
}
