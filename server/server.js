const express = require('express');
const path = require('path');
const routes = require('./routing')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../', 'client')));
app.use(routes);
app.listen(3000, () => {
    console.log('Сервер запущен.');
});