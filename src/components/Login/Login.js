import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Login.scss';

const Login = ({ children }) => {
  const [password, setPassword] = useState('');

  const handleSave = () => {
    localStorage.setItem('password', password);
    setPassword('');
  };

  const savedPassword = localStorage.getItem('password');

  if (savedPassword) {
    return children;
  }

  return (
    <div className="Login">
      <input className="Login__input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button className="Login__button" type="primary" onClick={handleSave}>Save</button>
    </div>
  );
};

Login.propTypes = {
  children: PropTypes.node,
};

export default Login;
