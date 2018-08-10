const webpack = require('webpack');
const compose = require('lodash/fp/compose');
const withTypescript = require('@zeit/next-typescript');
const withProgressBar = require('next-progressbar');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const env = ['MY_ENV'];

function CreateDotEnv() {}
CreateDotEnv.prototype.apply = compiler => {
  const createEnvFromProcessEnv = require('./helpers/createEnvFromProcessEnv');
  compiler.plugin('done', () => createEnvFromProcessEnv(env));
};

const fileLoaderRule = {
  test: /\.(css)$/,
  use: [
    {
      loader: 'file-loader',
      options: {}
    }
  ]
};

const nextConfig = {
  webpack(config) {
    config.plugins.push(
      new CreateDotEnv(),
      new webpack.EnvironmentPlugin(env),
      new ForkTsCheckerWebpackPlugin()
    );

    config.module.rules.push(fileLoaderRule);

    return config;
  },
  progressBar: { profile: true, compiledIn: true }
};

module.exports = compose(
  withProgressBar,
  withTypescript
)(nextConfig);
