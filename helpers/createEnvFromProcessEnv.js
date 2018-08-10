const fs = require('fs');

const createEnvFromProcessEnv = whiteList => {
  const data = whiteList.reduce((acc, key) => {
    if (process.env[key]) {
      acc = `${acc}${key}=${process.env[key]}\r\n`;
    }

    return acc;
  }, '');

  fs.writeFileSync('./.next/.env', data);
};

module.exports = createEnvFromProcessEnv;
