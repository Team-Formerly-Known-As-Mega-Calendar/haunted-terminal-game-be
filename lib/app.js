const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/v1/auth', require('./controllers/auth'));
app.use('/api/v1/stories', require('./controllers/stages'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
