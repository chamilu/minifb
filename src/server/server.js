const express = require('express');
const bodyParser = require('body-parser');
const Path = require('path');
const morgan = require('morgan');
const app = express();

const publicDir = Path.resolve(__dirname, '../../public');
const port = process.env.PORT || 4000;

app.use(morgan('dev'));
app.use(express.static(publicDir));

app.get('*', (req, res) => {
    res.sendFile(Path.resolve(publicDir, 'index.html'));
});

app.listen(port, () => {
    console.log(`\n # server listening on http://localhost:${port}\n`);
});
