import React  from 'react';
import PropTypes from 'prop-types';

import { Layout, Breadcrumb } from 'antd';

import './Layout.scss';

const { Content, Sider, Footer } = Layout;

const PageLayout = ({ children, sider, breadcrumbs, siderWidth = 300 }) => (
  <Layout className="Layout">
    {sider
      ? (
        <Sider
          className="Layout__sider"
          width={siderWidth}
          breakpoint="lg"
          collapsedWidth="0"
        >
          {sider}
        </Sider>
      )
      : null}
    <Layout className="Layout__layout">
      {breadcrumbs
        ? (
          <Breadcrumb className="Layout__breadcrumb">
            {breadcrumbs.map(breadcrumb => (<Breadcrumb.Item key={breadcrumb}>{breadcrumb}</Breadcrumb.Item>))}
          </Breadcrumb>
        )
        : null}
      <Content className="Layout__contentContainer">
        <div className="Layout__content">
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Czarny Boilerplate <span className="copyleft">©</span> 2018 Created by Łukasz Pluszczewski
      </Footer>
    </Layout>
  </Layout>
);

PageLayout.propTypes = {
  children: PropTypes.node,
  sider: PropTypes.node,
  breadcrumbs: PropTypes.arrayOf(PropTypes.string),
  siderWidth: PropTypes.number,
};

export default PageLayout;
