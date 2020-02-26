import express from 'express';
import next from 'next';

import setupProxy from './setupProxy';

const port = parseInt(process.env.PORT ?? '', 10) || 3000;
const env = process.env.NODE_ENV;
const dev = env !== 'production';
const app = next({
  dir: '.', // base directory where everything is, could move to src later
  dev,
});

const handle = app.getRequestHandler();

app
  .prepare()
  .then(async () => {
    const server = express();
    // Set up the proxy.
    if (dev) {
      const proxy = await import('http-proxy-middleware');
      Object.keys(setupProxy).forEach(context => {
        server.use(proxy.createProxyMiddleware(context, setupProxy[context]));
      });
    }

    // Default catch-all handler to allow Next.js to handle all other routes
    server.all('*', (req, res) => handle(req, res));

    server.listen(port, err => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on port ${port} [${env}]`);
    });
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server');
    console.log(err);
  });
