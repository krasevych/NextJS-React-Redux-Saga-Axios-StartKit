export type EnvType = 'dev' | 'prod';
export type EnvConfig = { [key in EnvType]: Partial<Config> };

export interface Config {
  port: number;
  cdnUrl: string;
  isProd: boolean;
  apiUrl: string;
  nextDevMode: boolean;
}
