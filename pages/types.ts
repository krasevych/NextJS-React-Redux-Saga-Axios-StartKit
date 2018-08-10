import { ServerRequest, ServerResponse } from 'http';
import { NextContext } from 'next';
import { ComponentClass } from 'react';

import { AppStore } from '../store/createStore';

export interface NextInitialProps<Q = {}>
  extends Pick<NextContext, Exclude<keyof NextContext, 'query'>> {
  store: AppStore;
  query: Q;
}

export interface NextDocumentInitialProps<Q = {}> extends NextInitialProps<Q> {
  req: ServerRequest;
  res: ServerResponse;
  renderPage: Function;
}

export interface NextPage<P = {}> extends ComponentClass {
  getInitialProps: (props: NextInitialProps) => P;
}
