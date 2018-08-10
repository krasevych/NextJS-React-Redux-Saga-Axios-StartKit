import Document, { NextDocumentContext } from 'next/document';

const withDocumentInitialProps = (
  getInitialPropsMiddleware: (props: NextDocumentContext) => any
) => (BaseComponent: typeof Document) => {
  class WrappedComponent extends Document {
    static displayName = `withDocumentInitialProps(${BaseComponent.name ||
      'BaseComponent'})`;

    static async getInitialProps(props: NextDocumentContext) {
      props.query;
      let pageProps = {};
      if (BaseComponent.getInitialProps) {
        pageProps = await BaseComponent.getInitialProps(props);
      }

      return {
        ...pageProps,
        ...getInitialPropsMiddleware(props)
      };
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  }

  return WrappedComponent;
};

export default withDocumentInitialProps;
