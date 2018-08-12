import { Config, EnvConfig, EnvType } from './types';

const configs: EnvConfig = {
  dev: {
    apiUrl: '',
    nextDevMode: true
  },
  prod: {
    port: 3000,
    isProd: true,
    cdnUrl: '',
    apiUrl: '',
    nextDevMode: false
  }
};

const currentEnv: EnvType = (process.env.MY_ENV as EnvType) || 'dev';
const envConfig: Partial<Config> = configs[currentEnv];

export default envConfig;
