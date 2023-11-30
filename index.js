const express = require('express');
const app = express();
const DB = require('./database.js');

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Getsuggestions
apiRouter.get('/suggestions', async (_req, res) => {
  const suggestions = await DB.getSuggestions();
  res.send(suggestions);
});

// SubmitSuggestions
apiRouter.post('/suggestions', async (req, res) => {
  DB.addSuggestion(req.body);
  const suggestions  = await DB.getSuggestions();
  res.send(suggestions);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});