import React, { Suspense, lazy, useRef } from 'react';

import Login from '../Login/Login';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { Layout, Menu, Icon, Button } from 'antd';

import './App.scss';

const { Header } = Layout;

// lazy loaded routes
const HomePage = lazy(() => import(
  /* webpackChunkName: "HomePage" */
  '../../pages/HomePage'
));
const ExamplePage = lazy(() => import(
  /* webpackChunkName: "ExamplePage" */
  '../../pages/ExamplePage'
));

const App = () => {
  const loginRef = useRef(null);

  const removePassword = () => {
    localStorage.setItem('password', '');
    loginRef.current.forceUpdate();
  };

  let activePage;

  switch(window.location.pathname) {
    case '/example':
      activePage = 'example';
      break;
    default:
      activePage = 'home';
  }

  return (
    <Router>
      <Layout>
        <Header className="header">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[activePage]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="home">
              <Link to="/"><Icon type="home" />Home</Link>
            </Menu.Item>
            <Menu.Item key="example">
              <Link to="/example"><Icon type="align-left" />Example page</Link>
            </Menu.Item>
          </Menu>
          <Button
            className="App__logout"
            type="primary"
            shape="circle"
            icon="logout"
            onClick={removePassword}
          />
        </Header>
        <Login ref={loginRef}>
          <Suspense fallback={<Loading withLayout/>}>
            <Switch>
              <Route
                exact
                path="/"
                component={HomePage}
              />
              <Route
                exact
                path="/example"
                component={ExamplePage}
              />
            </Switch>
          </Suspense>
        </Login>
      </Layout>
    </Router>
  );
};

export default App;
