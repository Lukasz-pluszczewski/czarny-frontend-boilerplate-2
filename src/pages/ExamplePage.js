import React, { useEffect } from 'react';

import notification from '../services/notificationService';
import { getAction, connect } from '../services/reduxBreeze';

import Layout from '../components/Layout/Layout';

const ExamplePage = () => {
  useEffect(() => {
    notification.success('Component mounted!');
    return () => notification.error('Component will unmount!');
  }, []);

  return (
    <Layout
      breadcrumbs={['Home', 'Example']}
    >
      Lorem ipsum
    </Layout>
  );
};

export default connect(
  {
    defaultFoo: 'example.foo',
    defaultBar: 'example.bar',
  },
  {
    defaultExample: getAction('defaultExample'),
  }
)(ExamplePage);
