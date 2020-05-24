const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const db = require('../db');
const port = 1380;
const userRouter = require('./routers/users.router')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views', './expressjs/views');

app.get('/', (req, res) => {
    res.render('index');
})
app.use('/users', userRouter);
app.listen(port, () => {
    console.log('server is running on port ' + port);
})