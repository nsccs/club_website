const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const path = require('path')

const PUBLIC_DIR = path.resolve(__dirname, '..', 'dist');
const port = 3002;
const app = express();

const compression = require('compression')

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(PUBLIC_DIR));

app.get('/', (req, res) => {
    res.sendStatus(200);
})

app.listen(port, () => console.log(`listening on port ${port}`)); 
