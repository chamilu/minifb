const express = require('express');
const bodyParser = require('body-parser');
const Path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const apiRouter = require('./api');

const connectionString = `mongodb://localhost:27017/minifb`;
mongoose.connect(connectionString);
mongoose.connection
    .once('open', err => {
        if (err) throw err;
        console.log('mongodb :: connected successfully');
    })
    .on('error', () => {
        console.log('mongodb :: connection failed');
    });

const publicDir = Path.resolve(__dirname, '../../public');
const port = process.env.PORT || 4000;

app.use(morgan('dev'));
app.use(express.static(publicDir));

app.use('/api', apiRouter);
app.get('*', (req, res) => {
    res.sendFile(Path.resolve(publicDir, 'index.html'));
});

app.listen(port, () => {
    console.log(`\n # server listening on http://localhost:${port}\n`);
});
