import express from 'express';
import bodyParser from 'body-parser';
// import editorsRoutes from './routes/editors.js';
import articlesRoutes from './routes/articles.js';
import administratorsRoutes from './routes/administrator.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

// ROUTES
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Home');
});

// app.use('/editors', editorsRoutes);
app.use('/articles', articlesRoutes);
app.use('/administrators', administratorsRoutes);

app.listen(PORT, HOST, () => {
    console.log(`Server is running on port: http://${HOST}:${PORT}`);
});