import { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../components/Layout';
import { authActions } from '../store/modules/auth';

import { NextInitialProps } from './types';

interface IndexPageQuery {}
interface IndexPageProps {}

class IndexPage extends Component<IndexPageProps> {
  static async getInitialProps({ store }: NextInitialProps<IndexPageQuery>) {
    store.dispatch(authActions.loginRequest());

    return {};
  }

  render() {
    return <Layout>test</Layout>;
  }
}

export default connect()(IndexPage);
