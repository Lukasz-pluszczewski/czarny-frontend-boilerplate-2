import React  from 'react';
import PropTypes from 'prop-types';

import './Loading.scss';

const Loading = () => (
  <div className="LoadingIcon__iconContainer">
    Loading...
  </div>
);

Loading.propTypes = {
  withLayout: PropTypes.bool,
};

export default Loading;
