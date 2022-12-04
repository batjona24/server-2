import express from 'express';
import insertDashBetweenEven from './insertDash.js';

const app = express();
app.use(express.json());

//GET
app.get('/insert', async (req, res) => {
    const { string }= req.query;
    const insertDash = await insertDashBetweenEven(string);
    res.status(200);
    res.json(insertDash);
});

// POST
app.post('/insert', async (req, res) => {
    const { string } = req.body;
    const insertDash = await insertDashBetweenEven(string);
    res.status(200);
    res.json(insertDash);
});

app.all('/*', async (req, res) => {
    res.status(404);
    res.json({ error: 'This route does not exist' });
});

const hostname = 'localhost';
const port = 3000;

app.listen(port, hostname, () => {
    console.log(`Server listening on http://${hostname}:${port}`)
});