import { injectGlobal } from 'styled-components';

import config from '../config';
import curry from '../helpers/curry';

import { renderFontFace } from './helpers';

const fontUrl = `${config.cdnUrl}static/fonts`;
const renderSomeFont = curry(renderFontFace)('SomeFont', fontUrl);

export const setDefaultFonts = () => injectGlobal`
${renderSomeFont('3001AF_5_0', 300)}
${renderSomeFont('ProximaNovaRegular', 400)}
${renderSomeFont('3001AF_4_0', 800)}
`;
