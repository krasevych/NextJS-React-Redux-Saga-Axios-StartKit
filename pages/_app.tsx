import compose from 'lodash/fp/compose';
import { NextContext } from 'next';
import nextReduxSaga from 'next-redux-saga';
import withRedux from 'next-redux-wrapper';
import App, { AppComponentContext, Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

import setupApi from '../helpers/setupApi';
import createStore, { AppStore } from '../store/createStore';

import { NextPage } from './types';

interface NextContextWithStore extends NextContext {
  store: AppStore;
}

interface NextReduxWrapperProps {
  store: AppStore;
}

interface NextReduxWrapperContext extends AppComponentContext {
  ctx: NextContextWithStore;
  Component: NextPage;
}

setupApi();

class NextApp extends App<NextReduxWrapperProps> {
  static async getInitialProps(props: NextReduxWrapperContext) {
    const { Component, ctx } = props;

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { store, pageProps, Component } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default compose(
  withRedux(createStore, { debug: false }),
  nextReduxSaga
)(NextApp);
