import React, { Component } from 'react';

import { setDefaultFonts } from '../../styles/fonts';
import '../../styles/global';

export interface AppProps {}

class App extends Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
    setDefaultFonts();
  }

  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}

export default App;
