import { Component } from 'react';

import App from '../App';
import Footer from '../Footer';

import Main from './Main';

interface LayoutProps {}

class Layout extends Component<LayoutProps> {
  render() {
    const { children } = this.props;
    return (
      <App>
        <Main>{children}</Main>
        <Footer />
      </App>
    );
  }
}

export default Layout;
