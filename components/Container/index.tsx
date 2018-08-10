import styled from 'styled-components';

import { media } from '../../styles/helpers';

const containerAdaptiveStyles = media.tablet`
    padding: 0 20px;
`;

const Container = styled.div`
  padding: 0 30px;
  ${containerAdaptiveStyles};
`;

export default Container;
