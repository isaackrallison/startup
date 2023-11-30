const express = require('express');
const app = express();
const DB = require('./database.js');

const port = process.argv[2] ? parseInt(process.argv[2], 10) : 3000;

app.use(express.json());
app.use(express.static('public'));

const apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.get('/suggestions', async (_req, res) => {
    const suggestions = await DB.getSuggestions();
    res.send(suggestions);
});

apiRouter.post('/suggestions', async (req, res) => {
    try {
        const suggestion = req.body;
        await DB.addSuggestion(suggestion);
        const suggestions = await DB.getSuggestions();
        res.send(suggestions);
    } catch (error) {
        console.error('Error adding suggestion:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
