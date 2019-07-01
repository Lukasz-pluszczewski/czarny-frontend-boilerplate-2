import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout/Layout';
import { Input, Button, Card } from 'antd';

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
    <Layout
      breadcrumbs={['Login']}
    >
      <div className="Login">
        <Card className="Login__card">
          <Input className="Login__input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
          <Button className="Login__button" type="primary" onClick={handleSave}>Save</Button>
        </Card>
      </div>
    </Layout>
  );
};

Login.propTypes = {
  children: PropTypes.node,
};

export default Login;
