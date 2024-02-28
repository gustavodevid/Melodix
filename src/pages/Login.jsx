// src/components/LoginButton.js
import React from 'react';
import queryString from 'query-string';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Login = () => {
  
  return (
    <div>
      <Navbar isLoginPage={true} />
      <Hero />
    </div>
  );
};

export default Login;
