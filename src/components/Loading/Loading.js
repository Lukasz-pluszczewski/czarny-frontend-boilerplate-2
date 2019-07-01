import React  from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout/Layout';
import { Icon } from 'antd';

import './Loading.scss';

const Loading = ({ withLayout }) => {
  const loadingIcon = (
    <div className="LoadingIcon__iconContainer">
      <Icon className="LoadingIcon__icon" type="loading" />
    </div>
  );

  if (withLayout) {
    return (
      <Layout>
        {loadingIcon}
      </Layout>
    );
  }
  return loadingIcon;
};

Loading.propTypes = {
  withLayout: PropTypes.bool,
};

export default Loading;
