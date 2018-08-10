import { NextDocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import withDocumentInitialProps from './withDocumentInitialProps';

const withStyledComponent = ({ renderPage }: NextDocumentContext) => {
  const sheet = new ServerStyleSheet();
  const page = renderPage((App: any) => (props: any) =>
    sheet.collectStyles(<App {...props} />)
  );
  const styleTags = sheet.getStyleElement();

  return {
    ...page,
    styleTags
  };
};

export default withDocumentInitialProps(withStyledComponent);
