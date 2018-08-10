import Document, { Head, Main, NextScript } from 'next/document';

import withStyledComponent from '../HOCs/withStyledComponent';

class MyDocument extends Document {
  render() {
    const { styleTags } = this.props;
    return (
      <html>
        <Head>{styleTags}</Head>
        <body>
          <div id="modal-root" />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default withStyledComponent(MyDocument);
