// src/pages/Login.js
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', data);
      localStorage.setItem('token', JSON.stringify(response.data.token)); // Store token
      alert('Login successful!');
    } catch (error) {
      console.error(error);
      alert('Login failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('email')} placeholder="Username" required />
      <input type="password" {...register('password')} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
