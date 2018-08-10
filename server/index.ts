import * as dotenv from 'dotenv';
import * as express from 'express';
import * as next from 'next';
import * as path from 'path';

import routes from '../routes';

dotenv.config({
  path: path.resolve(process.cwd(), '.next/.env')
});
import config from '../config';

const { port, cdnUrl, nextDevMode } = config;
const app = next({ dev: nextDevMode });
const handle = routes.getRequestHandler(app);

app.setAssetPrefix(cdnUrl);
app
  .prepare()
  .then(() => {
    const server = express();
    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err: any) => {
      if (err) throw err;
      console.log(`Ready on ${port}`, process.env.MY_ENV);
    });
  })
  .catch(ex => {
    console.log(ex.stack);
    process.exit(1);
  });
