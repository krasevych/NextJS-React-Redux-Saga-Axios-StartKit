import { Component } from 'react';

import FooterWrapper from './Wrapper';

export interface FooterProps {}

class Footer extends Component<FooterProps> {
  render() {
    return <FooterWrapper>Roman Krasevych</FooterWrapper>;
  }
}

export default Footer;
