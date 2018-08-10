import { Config, EnvConfig, EnvType } from './types';

const configs: EnvConfig = {
  dev: {
    apiUrl: 'https://api.animatron.com/',
    nextDevMode: true
  },
  prod: {
    port: 3000,
    isProd: true,
    cdnUrl: 'https://assets.animatron.com/video-templates/',
    apiUrl: 'https://api.animatron.com/',
    nextDevMode: false
  }
};

const currentEnv: EnvType = (process.env.MY_ENV as EnvType) || 'dev';
const envConfig: Partial<Config> = configs[currentEnv];

export default envConfig;
