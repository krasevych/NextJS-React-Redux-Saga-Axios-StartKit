import defaultConfig from './default';
import env from './env';

const config = {
  ...defaultConfig,
  ...env
};

export default config;
