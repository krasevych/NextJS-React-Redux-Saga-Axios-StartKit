import { Config } from './types';

const defaultEnv: Config = {
  port: 3005,
  cdnUrl: '/',
  isProd: false,
  apiUrl: 'https://api.animatron-test.com/',

  nextDevMode: true
};

export default defaultEnv;
