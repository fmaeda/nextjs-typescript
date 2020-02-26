import express, { json } from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(
  bodyParser.raw({
    inflate: true,
    type: 'application/octet-stream',
  }),
);
app.use(json());

app.get('/teste', (_req, res) => res.json({ status: 'ok' }));

app.listen(3033, () => {
  console.log('Stub server listening on port 3033!');
});
